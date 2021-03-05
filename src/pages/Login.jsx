import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({ email: '', password: '' });
  // const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await login(data.email, data.password);
      history.push('/dashboard');
    } catch (err) {
      console.log('failed to login');
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
      <FormControl id="email" my="4" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id="password" my="4" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
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
