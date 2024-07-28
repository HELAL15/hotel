// src/context/SettingContext.js
import React, { createContext, useState, useEffect, useMemo } from 'react';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router';
import { useLngContext } from './ChangeLng';

export const SettingContext = createContext();

export const SettingProvider = ({ children }) => {
  const [setting, setSetting] = useState(null);
  const { data: fetchedSetting , isLoading , refetch } = useFetch("setting");

  // const { lang } = useLngContext();

  const location = useLocation()

  useEffect(() => {
    if (fetchedSetting) {
      setSetting(fetchedSetting);
    }
  }, [fetchedSetting ]);


  const memoizedSetting = useMemo(() => ( setting ), [setting ]);

  return (
    <SettingContext.Provider value={{memoizedSetting , isLoading}}>
      {children}
    </SettingContext.Provider>
  );
};