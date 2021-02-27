import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Spacer, Box, Heading, Button, useToast } from '@chakra-ui/react';

import { auth } from '../firebase';
import { useGetUser } from '../context/userContext';

const Navbar = () => {
  const toast = useToast();
  const [{ isAuthenticated }] = useGetUser();

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
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg="blackAlpha.100">
      <Flex width="90%" margin="auto">
        <Box p="2">
          <Heading size="lg" color="orange.400" as={Link} to="/">
            DBMS
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
