import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Button,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
import { validateInputs } from '../utils/validators';
import { db } from '../firebase';

const Signup = () => {
  const toast = useToast();
  const history = useHistory();
  const [data, setData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { signup, currentUser } = useAuth();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (currentUser) history.push('/dashboard');
  }, [currentUser, history]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const validationErrors = validateInputs(data);
    if (Object.keys(validationErrors).length > 0)
      return setErrors(validationErrors);

    try {
      setErrors({});
      setLoading(true);

      const qs = await db
        .collection('users')
        .where('username', '==', data.username)
        .limit(1)
        .get();

      if (!qs.empty) {
        setLoading(false);
        return setErrors({ ...errors, username: 'Username is taken' });
      }

      const user = await signup(data.email, data.password);

      db.collection('users')
        .doc(user.uid)
        .set({ email: data.email, username: data.username })
        .then(() => console.log('recorded in firestore'))
        .catch(() =>
          console.log('error in recording signup info to firestore')
        );

      toast({
        title: 'Account created.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      history.push('/dashboard');
    } catch (err) {
      console.log(err.code);
      console.log(err.message);
      if (err.code === 'auth/email-already-in-use')
        setErrors({ ...errors, email: err.message });
    }
    setLoading(false);
  };

  return (
    <Box w={{ base: '100%', md: '40%' }} margin="auto" pt="10">
      <Text
        fontSize="4xl"
        color="teal.600"
        fontWeight="bold"
        textAlign="center"
      >
        SignUp
      </Text>

      <FormControl id="username" my="4" isRequired isInvalid={errors.username}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <FormErrorMessage>{errors.username}</FormErrorMessage>
      </FormControl>

      <FormControl id="email" my="4" isRequired isInvalid={errors.email}>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <FormErrorMessage>{errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl id="password" my="4" isRequired isInvalid={errors.password}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      </FormControl>

      <Button
        colorScheme="teal"
        onClick={handleSignUp}
        isLoading={loading}
        loadingText="Submiting.."
      >
        Submit
      </Button>
    </Box>
  );
};

export default Signup;
