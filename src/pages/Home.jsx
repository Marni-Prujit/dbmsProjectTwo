import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useGetUser } from '../context/userContext';

const Home = () => {
  const [{ isAuthenticated }] = useGetUser();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) history.push('/dashboard');
  }, [isAuthenticated, history]);

  return <div>This is home page</div>;
};

export default Home;
