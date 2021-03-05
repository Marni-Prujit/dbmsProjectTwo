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

const Signup = () => {
  const history = useHistory();
  const [data, setData] = useState({ username: '', email: '', password: '' });
  // const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { signup, currentUser } = useAuth();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log(currentUser);

  const handleSignUp = async (e) => {
    console.log(data);
    e.preventDefault();
    try {
      setLoading(true);
      await signup(data.email, data.password);
      history.push('/dashboard');
    } catch (error) {
      console.log('error in createing user');
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

      <FormControl id="username" my="4" isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
      </FormControl>

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
