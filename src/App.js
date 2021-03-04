import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Box w={{ base: '100%', sm: '85%' }} m="auto">
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={DashBoard} />
        </Box>
      </Switch>
    </>
  );
}

export default App;
