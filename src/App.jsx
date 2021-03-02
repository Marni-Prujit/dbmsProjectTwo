import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { useGetUser } from './context/userContext';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [, dispatch] = useGetUser();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const authUser = {
          uid: user.uid,
          username: user.displayName,
          email: user.email,
        };
        const payload = { user: authUser, isAuthenticated: true };
        dispatch({
          type: 'SET_USER',
          payload,
        });
      } else {
        dispatch({ type: 'REMOVE_USER' });
      }
    });
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
