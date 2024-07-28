import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null, 
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSettings: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSettings } = settingSlice.actions;

export default settingSlice.reducer;
