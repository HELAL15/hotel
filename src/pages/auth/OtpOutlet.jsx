import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { CheckCode } from '../../context/CheckCode'
import { useSelector } from 'react-redux'

const OtpOutlet = () => {

// const {codeReady} = useContext(CheckCode)

const codeReady = useSelector((state)=> state.forgetPassword.codeReady)




    return codeReady ? <Outlet/> : <Navigate to="/login" replace />

}

export default OtpOutlet
