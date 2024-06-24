import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { request } from '../../api/request'
import { toast } from 'react-toastify'
import { UserContext } from '../../context/UserContext'
import { Spin } from 'antd'

const ProfileNav = () => {

  const navigate = useNavigate()
  const {setUserDetails} = useContext(UserContext)
  const [loading , setLoading] = useState(false)

const handleLogOut = ()=>{
  setLoading(true)
  request.post('/user/user-logout')
  .then(res=>{
    toast.success(res.message)
    setLoading(false)
    sessionStorage.removeItem("hotel")
    setUserDetails([])
    navigate('/')
  })
  .catch((error)=>{
    setLoading(false)
    toast.error(error.response.data.message)
  })
}


  return (
    <>
      <div className='flex flex-col gap-4 sticky top-28 '>
          <NavLink to="/profile" className='profile-nav'>Profile</NavLink>
          <NavLink to="/account-password" className='profile-nav'>Account password</NavLink>
          <NavLink to="/wishlist" className='profile-nav'>wishlist</NavLink>
          <NavLink to="/booking-list" className='profile-nav'>booking list</NavLink>
          <button className='btn bg-red-500 text-white' onClick={handleLogOut}>{loading? <Spin/> : "logout"}</button>
      </div>
    </>
  )
}

export default ProfileNav
