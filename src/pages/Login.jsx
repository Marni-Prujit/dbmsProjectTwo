import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';

const Login = () => {
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
        <Input type="email" />
      </FormControl>

      <FormControl id="password" my="4" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>

      <Button colorScheme="teal">Submit</Button>
    </Box>
  );
};

export default Login;
