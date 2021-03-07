import React from 'react';
import { Box } from '@chakra-ui/react';

import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavContainer from './NavContainer';

const Navbar = () => {
  return (
    <Box bg="blackAlpha.100" py="3">
      <NavContainer>
        <NavLogo />
        <NavLinks />
      </NavContainer>
    </Box>
  );
};

export default Navbar;
