import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Container,
  Button,
  FormErrorMessage,
  useToast,
  Heading,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { auth, db } from '../firebase';
import { validateEmailAndPassword } from '../utils/validators';
import { useGetUser } from '../context/userContext';

const Register = () => {
  const toast = useToast();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [{ user }] = useGetUser();

  useEffect(() => {
    if (user) history.push('/');
  }, [user, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('asdf');
    setIsLoading((isLoading) => !isLoading);
    console.log('asdf-after');

    let errors = validateEmailAndPassword(
      email,
      username,
      password,
      'register'
    );
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setIsLoading(false);
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        db.collection('users')
          .doc(user.uid)
          .set({ username, email })
          .then((docRef) => {
            console.log('firestore is filled');
          })
          .catch((err) => {
            console.log(err.message);
            console.log('was not recorded in firestore');
          });

        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        history.push('/');
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message
        toast({
          title: 'Registration failed, try again',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });

    setIsLoading((isLoading) => !isLoading);
  };

  console.log(isLoading);

  return (
    <Box height="90vh" display="flex">
      <Container height="fit-content" p="10">
        <Heading textAlign="center" color="gray.600" my="5" size="3xl">
          SignUp
        </Heading>

        <FormControl
          id="username"
          isRequired
          my="6"
          isInvalid={errors.username}
        >
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            size="md"
            name="username"
            placeholder="Username"
            borderColor="blackAlpha.400"
            errorBorderColor="red.500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormErrorMessage>{errors?.username}</FormErrorMessage>
        </FormControl>

        <FormControl id="email" isRequired my="5" isInvalid={errors.email}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            size="md"
            value={email}
            name="email"
            placeholder="jhon@gmail.com"
            borderColor="blackAlpha.400"
            errorBorderColor="red.500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormErrorMessage>{errors?.email}</FormErrorMessage>
        </FormControl>

        <FormControl id="email" isRequired my="5" isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            size="md"
            value={password}
            name="password"
            placeholder="Your Password"
            borderColor="blackAlpha.400"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormErrorMessage>{errors?.password}</FormErrorMessage>
        </FormControl>

        <Button
          colorScheme="teal"
          variant="solid"
          onClick={handleSubmit}
          isLoading={isLoading}
          loadingText="Submitting"
        >
          Submit
        </Button>
      </Container>
    </Box>
  );
};

export default Register;
