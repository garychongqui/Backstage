import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const fetchCurrentUser = async () => {
    if (currentUser?._id) return;

    const { data } = await axios.get('/api/users/me');

    setCurrentUser(data);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  console.log('current user', currentUser);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
