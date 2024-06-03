
import React, { useState, useCallback , memo, useContext } from 'react';

import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import Counter from './Counter'
import { BookServiceContext } from '../../context/BookServiceContext';

export default function GuestsCounter() {

  const {counters , handleCount , collectCounts , guestsCount} = useContext(BookServiceContext)

    const guuestsNumber = guestsCount
  return (
    <div className="flex flex-col gap-4 py-4">
      <h3 className='text-2xl text-black font-semibold px-4'>guests ({guuestsNumber})</h3>
      {counters.map((counter, index) => (
        <div key={index} className="flex items-center justify-between px-5 gap-4">
          <span className="ml-2 text-xl">{counter.label}</span>
          <div className='flex items-center gap-4'>
            <button
              className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
              onClick={() => handleCount(index, 'subtract')}
              disabled={counter.counter === 0? true : false}
            >
              -
            </button>
            <span className="text-xl font-semibold w-[30px] text-center">{counter.count}</span>
            <button
              className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
              onClick={() => handleCount(index, 'add')}
            >
              +
            </button>
          </div>
        </div>
      ))}
      {/* <button
        className="mt-4 bg-primary rounded-full py-2 px-4 text-white"
        onClick={collectCounts}
      >
        Submit Counts
      </button> */}
    </div>
  )
}
