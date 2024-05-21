import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import img from '../img/place.webp'

const PlaceCard = () => {
  return (
    <>
        <Link to={`/places/${1}`} className='card'>
          <div className='img h-[300px] rounded-xl overflow-hidden relative group'>
          <span className='overlay bg-black/20 absolute inset-0 opacity-0 group-hover:opacity-100 duration-300'></span>
            <img src={img} alt='place' className='h-full w-full object-cover' />
          </div>
          <div className='card-body mt-3 mx-2'>
            <h3 className='text-xl font-semibold mb-2'>Singapore</h3>
            <p className='text-neutral-500 flex items-center gap-1'>
              <span>188,288</span>
              <span>properties</span>
            </p>
          </div>
        </Link>
    </>
  )
}

export default memo(PlaceCard)
