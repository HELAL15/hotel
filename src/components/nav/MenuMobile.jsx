import React, { useCallback, useContext, useEffect } from 'react'
import { IoIosClose } from 'react-icons/io'
import { useLocation } from 'react-router'
import { OpeningContext } from '../../context/OpenContext'
import { Link, NavLink } from 'react-router-dom'
import { CiBookmarkCheck, CiUser } from 'react-icons/ci'
import { Menu } from 'antd'
import { FaRegHeart } from 'react-icons/fa'
import { UserContext } from '../../context/UserContext'
import LogOut from '../profile/LogOut'
import { useTranslation } from 'react-i18next'

const MenuMobile = ({catNavMobile ,setCatNavMobile , logo , alt}) => {


const {t} = useTranslation()


  const token = localStorage.getItem("hotel")
  const {userDetails} = useContext(UserContext)


  const {isOpen , setIsOpen} = useContext(OpeningContext)
  const location = useLocation()
  useEffect(()=>{
    const handleClose = ()=>{
      setIsOpen(false)
    }
    handleClose()
  },[location])
  return (
    <div className='bg-white w-full md:w-[50%] h-full p-8'>
      <div className='flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold text-gray-800 w-[80px] md:w-[100px]'>
          <img src={logo} alt={alt} className='object-contain w-full h-full'/>
        </Link>
        <div className='text-4xl cursor-pointer ' onClick={useCallback(()=>setIsOpen(false),[isOpen])} ><IoIosClose /></div>
      </div>
      <div className='flex justify-between flex-col h-[90%] gap-4'>
        <nav className=' mt-10 '>
          <ul className='flex items-center justify-center flex-col gap-3'>
            <li className='w-full'><NavLink to='/' className="nav-link mobile w-full flex py-3 px-3 text-2xl font-semibold">{t("nav.home")}</NavLink></li>
            <li className='w-full'><NavLink to='/about' className="nav-link mobile w-full flex py-3 px-3 text-2xl font-semibold">{t("nav.about")}</NavLink></li>
            <li className='w-full'><NavLink to='/rooms' className="nav-link mobile w-full flex py-3 px-3 text-2xl font-semibold">{t("nav.services")}</NavLink></li>
            <li className='w-full'><NavLink to='/places' className="nav-link mobile w-full flex py-3 px-3 text-2xl font-semibold">{t("nav.places")}</NavLink></li>
            <li className='w-full'><NavLink to='/contact' className="nav-link mobile w-full flex py-3 px-3 text-2xl font-semibold">{t("nav.contact")}</NavLink></li>
          </ul>
        </nav>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-center items-center flex-wrap gap-5'>

          {
            token && userDetails ?
            <>
                <NavLink to='/profile'
                  className={`flex items-center gap-2 ${
                     'bg-gray-100 text-gray-900 '
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  <i><CiUser/></i>
                  <span>{t("dropdown.profile")}</span>
                </NavLink>

                <NavLink to='/booking-list'
                  className={`flex items-center gap-2 ${
                    'bg-gray-100 text-gray-900 '
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  <i><CiBookmarkCheck/></i>
                  <span>{t("dropdown.booking")}</span>
                </NavLink>

                <NavLink to='wishlist'
                  className={`flex items-center gap-2 ${
                    'bg-gray-100 text-gray-900 '
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                > 
                  <i><FaRegHeart/></i>
                  <span>{t("dropdown.wishlist")}</span>
                </NavLink>
            </>
            
            : <>
              <Link to='/login' className='btn btn-primary w-full block text-center'>{t("login.head")}</Link>
              <Link to='/register' className='btn btn-primary w-full block text-center'>{t("register.head")}</Link>
            </>
          }
           
           {
            token && userDetails && <LogOut/>
           }
          


          </div>
          {/* <Link to='tel:+201222810589' className='text-center text-neutral-500 mt-5'>need help? +201222810589</Link> */}
        </div>
      </div>
    </div>
  )
}

export default MenuMobile
