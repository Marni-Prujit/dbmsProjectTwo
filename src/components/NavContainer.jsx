import React from 'react';
import { Box } from '@chakra-ui/react';

const NavContainer = ({ children, ...props }) => {
  return (
    <Box
      w="90%"
      h="100%"
      m="auto"
      display="flex"
      flexDirection={{ base: 'column', sm: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      {children}
    </Box>
  );
};

export default NavContainer;
