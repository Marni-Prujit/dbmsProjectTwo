import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const NavLogo = (props) => {
  return (
    <Box {...props}>
      <Text fontSize="2xl" fontWeight="bold" color="teal.700" as={Link} to="/">
        Logo
      </Text>
    </Box>
  );
};

export default NavLogo;
