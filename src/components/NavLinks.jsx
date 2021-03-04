import React from 'react';
import { Stack } from '@chakra-ui/react';

import NavLink from './NavLink';

const NavLinks = () => {
  return (
    <Stack direction={{ base: 'column', sm: 'row' }}>
      <NavLink text="LogIn" to="/login" />
      <NavLink
        text="SignUp"
        to="/signup"
        bg="teal.400"
        color="white"
        borderRadius="4px"
        _hover={{
          bg: 'teal.500',
        }}
      />
    </Stack>
  );
};

export default NavLinks;
