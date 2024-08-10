import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router';
import { UserContext } from '../context/UserContext';
import Cookies from 'js-cookie';

const AuthGuard = () => {
  const {userDetails} = useContext(UserContext)
  // const token = localStorage.getItem("hotel")
  const token = Cookies.get("hotel")
  const location = useLocation();
  

  if (userDetails && Object.keys(userDetails).length > 0 && token && (location.pathname === '/login' || location.pathname === '/register')) {
    return <Navigate to="/" replace />;
  }

  return token && userDetails  ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );


}

export default AuthGuard