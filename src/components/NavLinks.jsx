import React from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import NavLink from './NavLink';

const NavLinks = () => {
  return (
    <Stack direction={{ base: 'column', sm: 'row' }}>
      <NavLink text="LogIn" to="/login" />
      <NavLink text="Dashboard" to="/dashboard" />
      <Button colorScheme="teal" as={Link} to="/signup">
        SignUp
      </Button>
    </Stack>
  );
};

export default NavLinks;
