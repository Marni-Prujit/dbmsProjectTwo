import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Container,
  Button,
  useToast,
  FormErrorMessage,
  Heading,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { auth } from '../firebase';
import { validateEmailAndPassword } from '../utils/validators';
import { useGetUser } from '../context/userContext';

const Login = () => {
  const toast = useToast();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [{ user }] = useGetUser();

  useEffect(() => {
    if (user) history.push('/');
  }, [user, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateEmailAndPassword(email, '*', password, 'login');
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
        toast({
          title: 'Successfully LoggedIn',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          toast({
            title: 'User not found',
            description: 'Click on SignUp for creating a new account',
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
        }
        if (err.code === 'auth/wrong-password') {
          toast({
            title: 'Wrong password',
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
        }
      });
  };

  return (
    <Box height="90vh" display="flex">
      <Container height="fit-content" p="10">
        <FormControl id="email" isRequired my="6" isInvalid={errors.email}>
          <Heading textAlign="center" color="gray.600" my="6" size="3xl">
            Login
          </Heading>
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

        <FormControl id="email" isRequired my="6" isInvalid={errors.password}>
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
          loadingText="Submitting"
        >
          Submit
        </Button>
      </Container>
    </Box>
  );
};

export default Login;
