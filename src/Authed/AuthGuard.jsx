import React from 'react'
import Cookie from 'cookie-universal';
import { Navigate, Outlet, useLocation } from 'react-router';

const AuthGuard = () => {
  const cookie = Cookie()
  const user = sessionStorage.getItem("user-info")
  const token = sessionStorage.getItem("hotel")
  const location = useLocation();
  

  if (user && token && (location.pathname === '/login' || location.pathname === '/register')) {
    return <Navigate to="/" replace />;
  }

  // التحقق من وجود التوكن والمستخدم
  return token && user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );


}

export default AuthGuard
