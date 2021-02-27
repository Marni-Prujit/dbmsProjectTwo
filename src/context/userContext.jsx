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
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
