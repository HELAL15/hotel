

import { configureStore } from '@reduxjs/toolkit'
import langSlice from './features/langSlice'
import settingSlice from './features/settingSlice'
import forgetPasswordSlice from './features/forgetPasswordSlice'
import userSlice from './features/userSlice'

export const store = configureStore({
  reducer: {
    lang: langSlice,
    setting:settingSlice, 
    forgetPassword: forgetPasswordSlice,
    user:userSlice,
  },
  // devTools: true,
})
