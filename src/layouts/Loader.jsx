import React, { useContext, useEffect, useState } from 'react'
import { SettingContext } from '../context/SettingContext'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'

const Loader = () => {
  // const {memoizedSetting:setting} = useContext(SettingContext)

  const setting = useSelector((state)=> state.setting.value)
  
  let data = setting?.data || null
console.log(setting);
  const {
    logo ,
    site_name,
  } = data || {} ;


  // const location = useLocation()


  // const [isLoading, setIsLoading] = useState(false);

  // const showLoader = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2200);
  // };

// useEffect(()=>{showLoader()},[location])

if(setting !== null) return null

  return (
    <>
    
      {/* isLoading && */}
       <div className='fixed z-50 top-0 left-0 bg-white w-screen h-screen grid place-items-center'>
        <img src={logo} alt={site_name} className='object-contain w-[200px] h-[200px]' />
      </div>
    
    </>
  )
}

export default Loader
