import React from 'react'
import { NavLink } from 'react-router-dom'
import DeleteAccount from './DeleteAccount' ;
import LogOut from './LogOut'
import { useTranslation } from 'react-i18next';

const ProfileNav = () => {

  const {t} = useTranslation()

  return (
    <>
      <div className='flex flex-col gap-4 sticky top-28 '>
          <NavLink to="/profile" className='profile-nav'>{t("profile.profile.link")}</NavLink>
          <NavLink to="/account-password" className='profile-nav'>{t("profile.password.link")}</NavLink>
          <NavLink to="/wishlist" className='profile-nav'>{t("profile.wishlist.link")}</NavLink>
          <NavLink to="/booking-list" className='profile-nav'>{t("profile.booklist.link")}</NavLink>
          <LogOut/>
          <DeleteAccount/>
      </div>
    </>
  )
}

export default ProfileNav
