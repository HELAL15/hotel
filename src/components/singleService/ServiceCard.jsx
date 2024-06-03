import React, { memo , useContext } from 'react'
import {FaStar } from 'react-icons/fa6'
import Datec from './Datec'
import { BookServiceContext } from '../../context/BookServiceContext';
import GuestsCounter from './Popver';




const ServiceCard = () => {
  const {collectCounts} = useContext(BookServiceContext)
  return (
    <>
      <div className='sticky top-28 rounded-[30px] overflow-hidden border border-neutral-200 p-4 mb-8 w-full'>
                <div className='flex items-center justify-between gap-4 '>
                  <p className='flex items-center gap-1 text-xl'>
                    <span className='text-black text-2xl'>${15}</span>
                    <span>/ night</span>
                  </p>
                  <p className='flex items-center gap-2 rate text-neutral-500'>
                  <i className='text-yellow-400'><FaStar /></i>
                  <span className='text-black'>4.5</span>
                </p>
                </div>
                <div className='actions rounded-[30px] overflow-hidden flex flex-col border border-neutral-200 my-4 divide-y-2 divide-neutral-100'>
                  <div className='flex w-[330px] overflow-x-auto px-2 py-4'>
                    <Datec/>
                    {/* <button className='px-8 py-3'>
                    ddd
                    </button> */}
                  </div>
                    <GuestsCounter/>
                  {/* <button className=''>
                  </button> */}
                </div>
                <div className='calcs flex flex-col gap-4 pb-4 border-b border-b-neutral-200 font-semibold'>
                  <p className='flex items-center justify-between gap-3'>
                    <span>$119 x 3 night</span>
                    <span>$357</span>
                  </p>
                  <p className='flex items-center justify-between gap-3'>
                    <span>Service charge</span>
                    <span>$0</span>
                  </p>
                </div>
                <div className='text-black font-semibold text-lg flex items-center justify-between gap-4 my-3'>
                  <p>total</p>
                  <p>$199</p>
                </div>
                <div className='flex justify-center'>
                  <button className='btn btn-primary w-full' onClick={collectCounts}>Book now</button>
                </div>
              </div>
    </>
  )
}

export default memo(ServiceCard)
