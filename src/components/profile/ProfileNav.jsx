import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { request } from '../../api/request'
import { toast } from 'react-toastify'
import { UserContext } from '../../context/UserContext'
import { Spin } from 'antd'
import DeleteAccount from '../../pages/Profile/DeleteAccount'
import { twMerge } from 'tailwind-merge'
import LogOut from './LogOut'

const ProfileNav = () => {


  return (
    <>
      <div className='flex flex-col gap-4 sticky top-28 '>
          <NavLink to="/profile" className='profile-nav'>Profile</NavLink>
          <NavLink to="/account-password" className='profile-nav'>Account password</NavLink>
          <NavLink to="/wishlist" className='profile-nav'>wishlist</NavLink>
          <NavLink to="/booking-list" className='profile-nav'>booking list</NavLink>
          <LogOut/>
          <DeleteAccount/>
      </div>
    </>
  )
}

export default ProfileNav
