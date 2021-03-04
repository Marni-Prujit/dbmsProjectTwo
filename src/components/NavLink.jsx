import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavLink = ({ to = '/', text, ...props }) => {
  return (
    <Box
      mx={{ base: 0, sm: '16px' }}
      py="1"
      px="3"
      as={Link}
      to={to}
      textAlign="center"
      {...props}
    >
      {text}
    </Box>
  );
};

export default NavLink;
