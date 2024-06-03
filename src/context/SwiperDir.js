import React, { createContext , useEffect, useState } from 'react';


export const SwiperDirContext = createContext()

const SwiperDirProvider = ({children}) => {
  const lang = localStorage.getItem("lang")
  const [dir , setDir] = useState(lang === "en" ? "ltr" : "rtl")
  useEffect(()=>{
    setDir(dir)
  },[lang , dir])

  return (
  <SwiperDirContext.Provider value={{dir}}>
    {children}
  </SwiperDirContext.Provider>
  )
};

export default SwiperDirProvider;
