import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { currentUser } = useAuth();
  const history = useHistory();
  useEffect(() => {
    if (currentUser) history.push('/dashboard');
  }, [currentUser, history]);
  return <div>this is home page</div>;
};

export default Home;
