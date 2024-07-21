import React, { memo, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import UserDropdown from '../components/nav/UserDropdown'
import { FaBars } from "react-icons/fa6";
import { OpeningContext } from '../context/OpenContext'
import MenuMobile from '../components/nav/MenuMobile'
import { useLngContext } from '../context/ChangeLng'
import { AiOutlineGlobal } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import { SettingContext } from '../context/SettingContext'
import { motion } from 'framer-motion'


const Header = () => {
  const user = sessionStorage.getItem("user-info")
  const token = sessionStorage.getItem("hotel")
  const {isOpen , setIsOpen} = useContext(OpeningContext)
  const { lang , changeLanguage } = useLngContext()
  const {t}= useTranslation()


  const {memoizedSetting:setting} = useContext(SettingContext)

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
                <li><NavLink to='/services' className='nav-link'>{t("nav.services")}</NavLink></li>
                <li><NavLink to='/places' className='nav-link'>{t("nav.places")}</NavLink></li>
                <li><NavLink to='/contact' className='nav-link'>{t("nav.contact")}</NavLink></li>
              </ul>
            </nav>
            <div className='flex items-center gap-4'>
            <div className='flex items-center gap-4'>
              <div>
                {
                  lang === 'en' ? <button className="flex items-center gap-1 text-gray-500 text-lg" onClick={()=>{ changeLanguage("ar") }}>
                  <span>{t("lng")}</span>
                  <AiOutlineGlobal/>
                  </button> :
                  <button  className="flex items-center gap-1 text-gray-500 text-lg" onClick={()=>{ changeLanguage("en") }}>
                  <span>{t("lng")}</span>
                  <AiOutlineGlobal/>
                </button>
                }
              </div>
              <ul className='hidden items-center space-x-2 gap-3 lg:flex'>
                {
                  user && token ? <li className='relative'><UserDropdown/></li> :

                  <li>
                    <Link to='/login' className='btn btn-primary'>login</Link>
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
