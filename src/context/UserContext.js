import React, { createContext, useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState([]);

  const { data } = useFetch("user/profile");

  const location = useLocation()

  useEffect(() => {
    if (data && data.data) {
      setUserDetails(data.data);
    }
  }, [data, location]);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
