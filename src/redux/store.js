

import { configureStore } from '@reduxjs/toolkit'
import langSlice from './features/langSlice'
import settingSlice from './features/settingSlice'
import forgetPasswordSlice from './features/forgetPasswordSlice'
import filterSlice from './features/filterSlice'
import reservationSlice from './features/reservationSlice'

export const store = configureStore({
  reducer: {
    lang: langSlice,
    setting:settingSlice, 
    forgetPassword: forgetPasswordSlice,
    filter:filterSlice,
    reservation:reservationSlice,
  },
  devTools: true,
})
