import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Container,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';

import { auth } from '../firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmailAndPassword = (email, password) => {
    const errors = {};
    // Empty errors checking
    if (email.trim() === '') errors.email = 'Email cannot be empty';
    if (password.trim() === '') errors.password = 'Password cannot be empty';
    if (Object.keys(errors).length > 0) return errors;

    // email checking
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(mailformat)) {
      errors.email = 'Invalid email';
    }
    // password checking
    if (password.length < 6) {
      errors.password = 'Password must be atleast 6 characters';
    }
    return errors;
  };

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
        var user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        console.log('error happened');
        // ..
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
          SignUp
        </Button>
      </Container>
    </Box>
  );
};

export default Register;
