import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';

const Signup = () => {
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
        <Input type="text" />
      </FormControl>

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

export default Signup;
