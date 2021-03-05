import React from 'react';
import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavContainer from './NavContainer';

const Navbar = () => {
  const location = useLocation();
  const urlKeyWords = location.pathname.split('/');
  const showNav =
    urlKeyWords.includes('room') && urlKeyWords.length > 2 ? false : true;
  console.log(showNav);

  return (
    <>
      {showNav && (
        <Box bg="blackAlpha.100" py="3">
          <NavContainer>
            <NavLogo />
            <NavLinks />
          </NavContainer>
        </Box>
      )}
    </>
  );
};

export default Navbar;
