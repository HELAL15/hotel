import React, { createContext, useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState([]);
  const token = sessionStorage.getItem("hotel");
const location = useLocation()
const { data } = useFetch(token ? "user/profile" : null , [token]);
  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        if (data && data.data) {
          setUserDetails(data.data);
        }
      }
    };

    fetchUserData();
  }, [token , data]);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
