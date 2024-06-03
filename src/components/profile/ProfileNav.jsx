import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileNav = () => {
  return (
    <>
      <div className='flex flex-col gap-4 sticky top-28 '>
          <NavLink to="/profile" className='profile-nav'>Profile</NavLink>
          <NavLink to="/account-password" className='profile-nav'>Account password</NavLink>
          <NavLink to="/wishlist" className='profile-nav'>wishlist</NavLink>
          <NavLink to="/booking-list" className='profile-nav'>booking list</NavLink>
          <button className='btn bg-red-500 text-white'>logout</button>
      </div>
    </>
  )
}

export default ProfileNav
