import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useSelector } from 'react-redux'

const OtpOutlet = () => {

const codeReady = useSelector((state)=> state.forgetPassword.codeReady)

  return codeReady ? <Outlet/> : <Navigate to="/login" replace />

}

export default OtpOutlet
