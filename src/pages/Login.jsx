import React from 'react';
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Container,
  Button,
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Box height="90vh" display="flex">
      <Container height="fit-content" p="10" mt="5">
        <FormControl id="email" isRequired my="6">
          <FormLabel>Email address</FormLabel>
          <Input type="email" size="lg" />
        </FormControl>

        <FormControl id="email" isRequired my="6">
          <FormLabel>Password</FormLabel>
          <Input type="password" size="lg" />
        </FormControl>

        <Button colorScheme="teal" variant="solid">
          Login
        </Button>
      </Container>
    </Box>
  );
};

export default Login;
