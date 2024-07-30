import React, { memo, useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '../../context/UserContext'
import { toast } from 'react-toastify'
import { request } from '../../api/request'
import { twMerge } from 'tailwind-merge'
import { Spin } from 'antd'
import { useTranslation } from 'react-i18next'

const LogOut = () => {



  const {setUserDetails} = useContext(UserContext)
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()

const handleLogOut = ()=>{
  setLoading(true)
  request.post('/user/user-logout')
  .then(res=>{
    setLoading(false)
    navigate('/')
    sessionStorage.removeItem("hotel")
    setUserDetails([])
    toast.success(res.data.message)
  })
  .catch((error)=>{
    setLoading(false)
    toast.error(error.response.data.message)
  })
}

const {t} = useTranslation()

  return (
    <>
       <button className={twMerge("btn bg-yellow-400 text-black mb-1 w-full")} onClick={handleLogOut}>{loading? <Spin/> : t("profile.logout")}</button>
    </>
  )
}

export default memo(LogOut)
