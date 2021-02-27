import React, { createContext, useContext, useReducer } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ initialState, reducer, children }) => {
  return (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UserContext.Provider>
  );
};

export const useGetUser = () => useContext(UserContext);

export const initialState = {
  user: null,
  isAuthenticated: false,
};

export const userReducer = (state, { type, payload }) => {
  console.log('ACTION FIRED');
  console.log({ type, payload });
  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        user: payload.user,
        isAuthenticated: payload.isAuthenticated,
      };

    case 'REMOVE_USER':
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};
