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

import { auth } from '../firebase';
import { validateEmailAndPassword } from '../utils/validators';
import { useGetUser } from '../context/userContext';

const Register = () => {
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

    const errors = validateEmailAndPassword(email, password);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
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
  };

  return (
    <Box height="90vh" display="flex">
      <Container height="fit-content" p="10">
        <Heading textAlign="center" color="gray.600" my="6" size="3xl">
          SignUp
        </Heading>
        <FormControl id="email" isRequired my="6" isInvalid={errors.email}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            size="lg"
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
            size="lg"
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

export default Register;
