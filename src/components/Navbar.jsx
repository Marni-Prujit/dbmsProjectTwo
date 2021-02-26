import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Spacer, Box, Heading, Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="whitesmoke">
      <Flex width="90%" margin="auto">
        <Box p="2">
          <Heading size="lg" color="teal.800" as={Link} to="/">
            DBMS Project 2
          </Heading>
        </Box>
        <Spacer />
        <Box p="2">
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
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
