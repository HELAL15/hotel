import dayjs from 'dayjs';
import React, { createContext, useState } from 'react';

export const BookServiceContext = createContext();

const BookingProvider = ({ children }) => {





  const [nights , setNights] = useState(1)
  const [mealP , setMealP] = useState(0)
  const [date, setDate] = useState('');
  const [roomCounts , setRoomsCount] = useState(1);
  const [option , setOption] = useState('')




  return (
    <BookServiceContext.Provider value={{  setDate , date, setOption , option , mealP , setMealP , nights , setNights , roomCounts , setRoomsCount }}>
      {children}
    </BookServiceContext.Provider>
  );
};

export default BookingProvider;
