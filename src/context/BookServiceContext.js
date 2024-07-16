import React, { createContext, useCallback, useEffect, useState } from 'react';

export const BookServiceContext = createContext();

const BookingProvider = ({ children }) => {

  const [nights , setNights] = useState(1)
  const [mealP , setMealP] = useState(0)
  const [date, setDate] = useState(null);
  const [roomCounts , setRoomsCount] = useState(1);
  const [option , setOption] = useState('')



  const [guestsCount, setGuestsCount] = useState(0);
  const [numRooms, setNumRooms] = useState(0);

  const [counters, setCounters] = useState([
    { label: 'Adults', count: 0 },
    { label: 'Children', count: 0 },
    { label: 'Infants', count: 0 },
    { label: 'Inffffants', count: 0 },
  ]);

  const [mainData, setMainData] = useState({
    date: null,
    guests: counters,
    numRooms: 0,
  });

  const handleCount = useCallback((index, type) => {
    setCounters(prevCounters =>
      prevCounters.map((counter, i) =>
        i === index
          ? { ...counter, count: type === 'add' ? counter.count + 1 : Math.max(counter.count - 1, 0) }
          : counter
      )
    );
  }, []);

  const collectCounts = useCallback(() => {
    console.log(mainData);
    setMainData({
      date: null,
      guests: [
        { label: 'Adults', count: 0 },
        { label: 'Children', count: 0 },
        { label: 'Infants', count: 0 },
      ],
      numRooms: 0,
    });
  }, [mainData]);

  useEffect(() => {
    const totalGuests = counters.reduce((total, counter) => total + counter.count, 0);
    setGuestsCount(totalGuests);
  }, [counters]);

  useEffect(() => {
    setMainData({
      date,
      guests: counters,
      numRooms,
    });
  }, [date, counters, numRooms]);

  return (
    <BookServiceContext.Provider value={{ counters, handleCount, collectCounts, guestsCount, setDate, numRooms, setNumRooms ,setOption , option , date, mealP , setMealP , nights , setNights , roomCounts , setRoomsCount }}>
      {children}
    </BookServiceContext.Provider>
  );
};

export default BookingProvider;
