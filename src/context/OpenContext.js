import React, { createContext, memo, useEffect, useState } from 'react'
import { useLocation } from 'react-router';

export const OpeningContext = createContext()

const OpenProvider = ({children}) => {

  const [isOpen , setIsOpen] = useState(false);

  const location = useLocation()
  useEffect(()=>{
    const handleClose = ()=>{
      setIsOpen(false)
    }
    handleClose()
  },[location])


  const handleAction = ()=>{
    setIsOpen(!isOpen)
  }



  return (
    <OpeningContext.Provider value={{isOpen, setIsOpen , handleAction }}>
    {children}
  </OpeningContext.Provider>
  )
}


export default memo(OpenProvider)
