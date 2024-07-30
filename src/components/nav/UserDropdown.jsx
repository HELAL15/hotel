
import {  memo, useContext, useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { UserContext } from '../../context/UserContext';
import userImg from '../../img/olp.jpeg'
import { useTranslation } from 'react-i18next'
import { Popover } from 'antd';






const Content = ()=>{
  const {userDetails} = useContext(UserContext)
  const {t} = useTranslation()
  return(
  <>
    <div className='flex items-center pb-3 border-b border-b-slate-200 mb-3'>
      <img src={userDetails?.photo_profile || userImg} alt={userDetails?.name} className='w-12 h-12 object-cover rounded-full overflow-hidden'/>
      <div className='m-2'>
        <p className='font-semibold'>{userDetails?.name}</p>
        {/* <p className='text-gray-500 text-sm'><span className='font-semibold'>{t("dropdown.type")} : </span>{userDetails?.account_type}</p> */}
      </div>
    </div>
    <NavLink to='/profile'
      className='dropdown-link'
      >
      <i><CiUser/></i>
      <span>{t("dropdown.profile")}</span>
    </NavLink>
    <NavLink to='/booking-list'
      className='dropdown-link'
      >
      <i><CiBookmarkCheck/></i>
      <span>{t("dropdown.booking")}</span>
    </NavLink>
    <NavLink to='/wishlist'
      className='dropdown-link'
      >
      <i><FaRegHeart/></i>
      <span>{t("dropdown.wishlist")}</span>
    </NavLink>
  </>
  )
}




function UserDropdown() {
const {userDetails} = useContext(UserContext)


  const [open, setOpen] =  useState(false);

  const handleOpenChange = (open) => {
    setOpen(open);
  }


  return (

    <Popover
      content={<Content/>}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <button className='w-[45px] h-[45px] rounded-full overflow-hidden m-auto inline-flex justify-center p-1  text-sm font-medium text-gray-700  hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-75s'>
      <img src={userDetails?.photo_profile || userImg} alt={userDetails?.name} className='w-full h-full object-cover rounded-full overflow-hidden'/>
      </button>
    </Popover>


  );
}

export default memo(UserDropdown);

