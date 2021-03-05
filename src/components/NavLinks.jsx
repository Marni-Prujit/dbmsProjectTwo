import React from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';

import NavLink from './NavLink';
import { useAuth } from '../contexts/AuthContext';

const NavLinks = () => {
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  return (
    <Stack direction={{ base: 'column', sm: 'row' }}>
      {currentUser ? (
        <>
          <NavLink text="Dashboard" to="/dashboard" />
          <Button
            colorScheme="teal"
            onClick={() => {
              logout();
              history.push('/');
            }}
          >
            LogOut
          </Button>
        </>
      ) : (
        <>
          <NavLink text="LogIn" to="/login" />
          <Button colorScheme="teal" as={Link} to="/signup">
            SignUp
          </Button>
        </>
      )}
    </Stack>
  );
};

export default NavLinks;
