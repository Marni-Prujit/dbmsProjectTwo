import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App';
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
