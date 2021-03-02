import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useGetUser } from '../context/userContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [{ user }] = useGetUser();
  console.log(user?.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        user?.isAuthenticated === false ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
