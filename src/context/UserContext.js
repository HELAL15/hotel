import React, { createContext, useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { reset } from '../redux/features/reservationSlice';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState([]); 
  const token = localStorage.getItem("hotel");
  const location = useLocation();
  
  const { data, refetch } = useFetch(token ? "user/profile" : null, [token]);
  // const navigate = useNavigate()

  const dispatch = useDispatch()

  
  if(token){
  const {exp} = jwtDecode(token)
  const expiration = (exp * 1000);
  if(Date.now() > expiration) {
    localStorage.removeItem("hotel")
    localStorage.removeItem("reservationId")
    // navigate("/")
    setUserDetails([])
    dispatch(reset());
  }
}


  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        if (data && data.data) {
          setUserDetails(data.data); 
        } else {
          setUserDetails([]);
        }
      } else {
        setUserDetails([]);
      }
    };

    fetchUserData();
    
  }, [token, data, location]);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails, refetch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;