import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  email:null,
  codeReady:false
};

export const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setCodeReady: (state , action) => {
      state.codeReady = action.payload
    },
  },
});

export const { setEmail, setCodeReady } = forgetPasswordSlice.actions;

export default forgetPasswordSlice.reducer;