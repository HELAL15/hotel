import React, { useContext } from 'react'
import Cookie from 'cookie-universal'
import { Outlet } from 'react-router'
import { UserContext } from '../context/UserContext'

export default function RequireBack() {
  const cookie = Cookie()
  // const user = sessionStorage.getItem("user-info")
  const {userDetails} = useContext(UserContext)
  const token = sessionStorage.getItem("hotel")
  return userDetails && token ? window.history.back() : <Outlet/>
}
