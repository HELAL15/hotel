import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import img from "../img/place.webp"

const ExplorePlace = () => {
  return (
    <>
      <Link to='/' className='card border border-neutral-100 p-4 rounded-[30px] relative hover:border-transparent hover:bg-slate-100 hover:shadow-md duration-300'>
        <span className='absolute top-3 rtl:left-3 ltr:right-3 text-black bg-neutral-200 px-3 rounded-[1rem] text-sm'>1.888</span>
        <div className='flex items-center gap-4'>
          <div className='w-[100px] h-[100px] overflow-hidden rounded-full'>
            <img src={img} className='object-cover aspect-square rounded-full' alt='town' />
          </div>
          <div className='flex flex-col gap-1 capitalize'>
            <h3 className='text-xl text-black'>new york</h3>
            <p>19 minutes drive</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default memo(ExplorePlace)
