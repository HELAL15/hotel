import React, { useContext } from 'react'
import Cookie from 'cookie-universal'
import { Navigate, Outlet } from 'react-router'
import { UserContext } from '../context/UserContext'
import Cookies from 'js-cookie'

export default function RequireBack() {
  const cookie = Cookie()
  // const user = localStorage.getItem("user-info")
  const {userDetails} = useContext(UserContext)
  // const token = localStorage.getItem("hotel")
  const token = Cookies.get("hotel")
  return userDetails && token && Object.keys(userDetails).length > 0 ? <Navigate to="/" replace /> : <Outlet/>
}