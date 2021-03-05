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

const Login = () => {
  const history = useHistory();
  const toast = useToast();
  const [data, setData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useAuth();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (currentUser) history.push('/dashboard');
  }, [currentUser, history]);

  const handleLogin = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (data.email.trim() === '')
      validationErrors.email = 'Email cannot be empty';
    if (data.password.trim() === '')
      validationErrors.password = 'Password cannot be empty';
    if (Object.keys(validationErrors).length > 0)
      return setErrors(validationErrors);

    try {
      setLoading(true);
      await login(data.email, data.password);
      toast({
        title: 'Logged In',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      history.push('/dashboard');
    } catch (err) {
      console.log(err.code);
      console.log(err.message);
      console.log('failed to login');
      if (err.code === 'auth/user-not-found') {
        toast({
          title: 'User not found',
          description: 'Signup to create an account',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
      if (err.code === 'auth/wrong-password')
        setErrors({ ...errors, password: 'Incorrect password' });
    }
    setLoading(false);
  };

  return (
    <Box w={{ base: '90%', md: '40%' }} margin="auto" pt="10">
      <Text
        fontSize="4xl"
        color="teal.600"
        fontWeight="bold"
        textAlign="center"
      >
        Login
      </Text>
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
        onClick={handleLogin}
        isLoading={loading}
        loadingText="Submiting.."
      >
        Submit
      </Button>
    </Box>
  );
};

export default Login;
