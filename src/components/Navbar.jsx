import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Spacer, Box, Heading, Button, useToast } from '@chakra-ui/react';

import { auth } from '../firebase';
import { useGetUser } from '../context/userContext';

const Navbar = () => {
  const toast = useToast();
  const [{ user, isAuthenticated }] = useGetUser();

  console.log('the user is: ', user, isAuthenticated);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast({
        title: 'Successfully logged out',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg="blackAlpha.200">
      <Flex width="90%" margin="auto">
        <Box p="2">
          <Heading size="lg" color="teal.800" as={Link} to="/">
            DBMS Project 2
          </Heading>
        </Box>
        <Spacer />
        <Box p="2">
          {!isAuthenticated ? (
            <>
              <Button
                colorScheme="teal"
                mr="4"
                variant="outline"
                as={Link}
                to="/register"
              >
                Sign Up
              </Button>
              <Button colorScheme="teal" as={Link} to="/login">
                Log In
              </Button>
            </>
          ) : (
            <>
              <Button colorScheme="teal" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
