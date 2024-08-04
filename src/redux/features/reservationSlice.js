import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    value: {
      child:0,
      infant:0,
      type:'',
      no_rooms:1,
      date:[],
    } 
}

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {


      setReservation: (state, action) => {
        state.value = action.payload;
      },
      increaseChild: (state) => {
        state.value.child += 1;
      },
      decreaseChild: (state) => {
        if (state.value.child > 0) state.value.child -= 1;
      },
      increaseInfant: (state) => {
        state.value.infant += 1;
      },
      decreaseInfant: (state) => {
        if (state.value.infant > 0) state.value.infant -= 1;
      },

      setChildDefault: (state) => {
        state.value.child = 0
      },

      setInfantDefault: (state) => {
        state.value.infant = 0
      },


      setType: (state , action) => {
        state.value.type = action.payload
      },
  
      setDate: (state , action) => {
        state.value.date = action.payload
      },




    }
})


export const { 
  setReservation,
  increaseChild,
  decreaseChild, 
  increaseInfant,
  decreaseInfant,
  setType,
  setDate,
  setInfantDefault,
  setChildDefault,
  } = reservationSlice.actions

export default reservationSlice.reducer
