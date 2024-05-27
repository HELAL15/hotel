// import React, { memo } from 'react'

// const About = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default memo(About)


import React, { useState, useCallback } from 'react';
import useFetch from '../hooks/useFetch';
import Seo from '../helpers/Seo';

const About = () => {




const {data} = useFetch('https://jsonplaceholder.typicode.com/posts')


console.log(data);




  // Initialize state for counters with an array of objects
  const [counters, setCounters] = useState([
    { type: 'Adults', count: 0 },
    { type: 'Children', count: 0 },
    { type: 'Infants', count: 0 },
  ]);

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
    const counts = counters.map(counter => counter);
    console.log('Collected counts:', counts);
  }, [counters]);

  return (
    <>
      <Seo title="about"  />
    <div className="flex flex-col gap-4">
      {counters.map((counter, index) => (
        <div key={index} className="flex items-center gap-4">
          <button
            className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
            onClick={() => handleCount(index, 'subtract')}
          >
            -
          </button>
          <span className="text-xl font-semibold w-[30px]">{counter.count}</span>
          <button
            className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
            onClick={() => handleCount(index, 'add')}
          >
            +
          </button>
          <span className="ml-2">{counter.label}</span>
        </div>
      ))}
      <button
        className="mt-4 bg-primary rounded-full py-2 px-4 text-white"
        onClick={collectCounts}
      >
        Submit Counts
      </button>
    </div>
    </>
  );
};

export default About;

