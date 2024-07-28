import React, { createContext, useState } from 'react';


export const CheckCode = createContext();

const CheckCodeProvider = ({ children }) => {
  const [codeReady, setCodeReady] = useState(false);
  const [email , setEmail] = useState('')
  
  return (
    <CheckCode.Provider value={{ codeReady, setCodeReady , email , setEmail }}>
      {children}
    </CheckCode.Provider>
  );
};

export default CheckCodeProvider;
