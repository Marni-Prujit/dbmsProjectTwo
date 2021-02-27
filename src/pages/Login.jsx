import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Container,
  Button,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { auth } from '../firebase';
import { validateEmailAndPassword } from '../utils/validators';

const Login = () => {
  const toast = useToast();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateEmailAndPassword(email, password);
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
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: 'Login fail, Try again',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box height="90vh" display="flex">
      <Container height="fit-content" p="10" mt="5">
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
          LogIn
        </Button>
      </Container>
    </Box>
  );
};

export default Login;
