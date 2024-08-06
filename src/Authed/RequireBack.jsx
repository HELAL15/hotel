import React, { useContext } from 'react'
import Cookie from 'cookie-universal'
import { Navigate, Outlet } from 'react-router'
import { UserContext } from '../context/UserContext'

export default function RequireBack() {
  const cookie = Cookie()
  // const user = localStorage.getItem("user-info")
  const {userDetails} = useContext(UserContext)
  const token = localStorage.getItem("hotel")
  return userDetails && token ? <Navigate to="/" replace /> : <Outlet/>
}
