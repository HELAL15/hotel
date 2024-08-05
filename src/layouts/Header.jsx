import React, { memo, useContext } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import UserDropdown from '../components/nav/UserDropdown'
import { FaBars } from "react-icons/fa6";
import { OpeningContext } from '../context/OpenContext'
import MenuMobile from '../components/nav/MenuMobile'
import { useLngContext } from '../context/ChangeLng'
import { AiOutlineGlobal } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import { SettingContext } from '../context/SettingContext'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../redux/features/langSlice';
import { UserContext } from '../context/UserContext';
import { twMerge } from 'tailwind-merge';
import { FaUserPlus } from 'react-icons/fa';


const Header = () => {

  const {userDetails:user} = useContext(UserContext)
  const token = localStorage.getItem("hotel")
  const {isOpen , setIsOpen} = useContext(OpeningContext)
  const {t}= useTranslation()


  const setting = useSelector((state) => state.setting.value);

  let data = setting?.data || null

  const {
    logo ,
    site_name
  } = data || {} ;

  const variantsNav = {
    hidden: { opacity: 0 , y:-100 },
    visible: { 
      opacity: 1 ,
      y:0, 
      transition:{
        duration:.3,
        type:"spring",
        stiffness:150
      }
    }
  }


  const lang = useSelector((state) => state.lang.value)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const location = useLocation()

  const handleLang = ()=>{
    dispatch(changeLang())
    navigate(location.pathname, { replace: true });
  }




  return (
    <>
      <motion.header 
        variants={variantsNav}
        initial="hidden"
        animate="visible"
        className='header-bg sticky top-0 w-full left-0 right-0 z-40 shadow-sm py-1'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
            <Link to='/' className='text-2xl font-bold text-gray-800 w-[80px] md:w-[100px]'>
                <img src={logo} alt={site_name} className='object-contain w-full h-full'/>
              </Link>
            </div>
            <nav className='hidden lg:flex mx-auto'>
              <ul className='flex items-center gap-7'>
                <li><NavLink to='/' className='nav-link'>{t("nav.home")}</NavLink></li>
                <li><NavLink to='/about' className='nav-link'>{t("nav.about")}</NavLink></li>
                <li><NavLink to='/rooms' className='nav-link'>{t("nav.services")}</NavLink></li>
                <li><NavLink to='/places' className='nav-link'>{t("nav.places")}</NavLink></li>
                <li><NavLink to='/contact' className='nav-link'>{t("nav.contact")}</NavLink></li>
              </ul>
            </nav>
            <div className='flex items-center gap-4'>
            <div className='flex items-center gap-4'>
              <button className='flex items-center gap-1' onClick={handleLang}>
              {lang === 'ar' ? 'english' : 'العربية'}
              <AiOutlineGlobal/>
              </button>
              <ul className='hidden items-center space-x-2 gap-3 lg:flex'>
                {
                  user && token ? <li className='relative'><UserDropdown/></li> :

                  <li>
                    <Link to='/login' className={twMerge(' flex items-center gap-2 btn btn-primary ')}>
                      <span>{t("login.head")}</span>
                      {/* <FaUserPlus /> */}
                    </Link>
                  </li>
                }
                  
              </ul>
            </div>
            <button className={`text-2xl block lg:hidden text-primary`} aria-label='toggler' onClick={()=> setIsOpen(!isOpen)}><FaBars/></button>

            </div>
            <div className={`${isOpen ? 'ltr:left-0 rtl:right-0 rtl:left-[unset]' : 'ltr:-left-full rtl:-right-full rtl:-left-[unset]'} lg:hidden fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-300`}>
            <MenuMobile />
          </div>

          </div>
        </div>
      </motion.header>
    </>
  )
}

export default memo(Header)
