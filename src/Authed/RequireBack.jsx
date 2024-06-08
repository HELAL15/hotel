import React from 'react'
import Cookie from 'cookie-universal'
import { Outlet } from 'react-router'

export default function RequireBack() {
  const cookie = Cookie()
  const user = sessionStorage.getItem("user-info")
  const token = sessionStorage.getItem("hotel")
  return user && token ? window.history.back() : <Outlet/>
}
