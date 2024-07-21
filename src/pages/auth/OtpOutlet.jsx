import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { CheckCode } from '../../context/CheckCode'

const OtpOutlet = () => {

const {codeReady} = useContext(CheckCode)




    return codeReady ? <Outlet/> : <Navigate to="/login" replace />

}

export default OtpOutlet
