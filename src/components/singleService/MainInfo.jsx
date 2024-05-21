import React, { memo, useState } from 'react'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
import { CiUser } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import { LiaDoorOpenSolid } from "react-icons/lia";

const MainInfo = () => {

  const [fav, setFav] = useState(false);

  const handleFav = () => {
    setFav(!fav);
    if (!fav) {
      console.log('add to fav');
      // toast('Added to favorites');
    } else {
      console.log('remove from fav');
      // toast('Removed from favorites');
    }
  };



  return (
    <>
      <div className='my-4 mt-0 rounded-[30px] border border-neutral-200 overflow-hidden p-4'>
                <div className='flex items-center justify-between gap-4'>
                  <span className='bg-primary/20 text-primary font-semibold capitalize px-3 rounded-[30px] text-sm'>wooden</span>
                  <button className='flex items-center gap-2 px-3 rounded-md duration-300 hover:bg-slate-200' onClick={handleFav}>
                  <i>{fav ? <FaHeart className='text-primary' /> : <FaRegHeart />}</i>
                    <span>wishlist</span>
                  </button>
                </div>
                <div className='flex flex-col gap-4 my-4'>
                  <h2 className='text-4xl text-black capitalize'>Beach House in Collingwood</h2>
                  <div className='flex items-center gap-8'>
                    <p className='flex items-center gap-2 rate text-neutral-500'>
                      <i className='text-yellow-400'><FaStar /></i>
                      <span className='text-black'>4.5</span>
                    </p>
                    <p className='flex items-center gap-1 text-neutral-500 font-semibold'>
                      <i className=''><IoLocationOutline /></i>
                      <span>egypt</span>
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4 md:gap-8 flex-wrap pt-5 border-t border-t-neutral-200 text-neutral-600 text-xl'>
                    <p className='flex items-center gap-2 text-neutral-500'>
                      <i className=''><CiUser /></i>
                      <span className=''>4 guests</span>
                    </p>
                    <p className='flex items-center gap-2 text-neutral-500'>
                      <i className=''><IoBedOutline /></i>
                      <span className=''>6 beds</span>
                    </p>
                    <p className='flex items-center gap-2 text-neutral-500'>
                      <i className=''><PiBathtubLight /></i>
                      <span className=''>3 baths</span>
                    </p>
                    <p className='flex items-center gap-2 text-neutral-500'>
                      <i className=''><LiaDoorOpenSolid /></i>
                      <span className=''>2 bedrooms</span>
                    </p>
                </div>
              </div>
    </>
  )
}

export default memo(MainInfo)
