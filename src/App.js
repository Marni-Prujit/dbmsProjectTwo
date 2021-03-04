import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Route to="/" component={Home} exact />
    </>
  );
}

export default App;
