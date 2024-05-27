import React, { createContext , useCallback , useEffect, useState } from 'react';



export const BookServiceContext = createContext()

const BookingProvider = ({children}) => {

  const [date , setDate] = useState(null)
  const [guestsCount , setGuestsCount] = useState(0)

  // Initialize state for counters with an array of objects
  const [counters, setCounters] = useState([
    { label: 'Adults', count: 0 },
    { label: 'Children', count: 0 },
    { label: 'Infants', count: 0 },
  ]);




  // Initialize mainData state
  const [mainData, setMainData] = useState({
    date: null, // assuming you have a date value here
    guests: counters,
  });



  
    // Function to handle count change
    const handleCount = useCallback((index, type) => {
      setCounters(prevCounters =>
        prevCounters.map((counter, i) => 
          i === index 
            ? { ...counter, count: type === 'add' ? counter.count + 1 : Math.max(counter.count - 1, 0) }
            : counter
        )
      );
    }, []);
  
    // Function to collect counts and send to backend
    const collectCounts = useCallback(() => {
      // const counts = counters.map(counter => counter.count);
      // console.log('Collected counts:', counts);
      // console.log(date)
      console.log(mainData);
      setMainData({
        date: null,
        guests: [
          { label: 'Adults', count: 0 },
          { label: 'Children', count: 0 },
          { label: 'Infants', count: 0 },
        ],
      });
    }, [mainData]);

    useEffect(() => {
      const totalGuests = counters.reduce((total, counter) => total + counter.count, 0);
      setGuestsCount(totalGuests);
    }, [counters]);


    useEffect(() => {
      setMainData({
        date: date,
        guests: counters,
      });
    }, [date, counters]);

  return (
  <BookServiceContext.Provider value={{counters , handleCount ,collectCounts , guestsCount , setDate}}>
    {children}
  </BookServiceContext.Provider>
  )
};

export default BookingProvider;
