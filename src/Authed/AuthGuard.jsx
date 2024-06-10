import React, { useContext } from 'react'
import Cookie from 'cookie-universal';
import { Navigate, Outlet, useLocation } from 'react-router';
import { UserContext } from '../context/UserContext';

const AuthGuard = () => {
  const cookie = Cookie()
  // const user = sessionStorage.getItem("user-info")
  const {userDetails} = useContext(UserContext)
  const token = sessionStorage.getItem("hotel")
  const location = useLocation();
  

  if (userDetails && token && (location.pathname === '/login' || location.pathname === '/register')) {
    return <Navigate to="/" replace />;
  }

  // التحقق من وجود التوكن والمستخدم
  return token && userDetails ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );


}

export default AuthGuard
