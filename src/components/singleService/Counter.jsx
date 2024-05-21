import React, { memo, useCallback, useMemo, useState } from 'react'

const Counter = ({type , age}) => {
  const [count, setCount] = useState(0)

  const handleCount = useCallback((type) => {
    if (type === 'add') {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }
  }, []);



  return (
    <>
    <div className='flex items-center justify-between'>
      <div>
        <p className='text-black font-semibold '>{type}</p>
        <p className='text-neutral-500'>ages {age}</p>
      </div>
      <div className='flex items-center gap-4'>
        <button className='bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold' onClick={() => handleCount()}>-</button>
        <span className='text-lg font-semibold w-[30px]'>{count}</span>
        <button className='bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold' onClick={() => handleCount('add')}>+</button>
      </div>
    </div>
    </>
  )
}

export default memo(Counter)
