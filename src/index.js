import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { initialState, userReducer, UserProvider } from './context/userContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider initialState={initialState} reducer={userReducer}>
      <ChakraProvider>
        <Router>
          <App />
        </Router>
      </ChakraProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
