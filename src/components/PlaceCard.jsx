import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import img from '../img/place.webp'

const PlaceCard = ({card}) => {
  return (
    <>
        <Link to={`/places/${1}`} className='card'>
          <div className='img h-[300px] rounded-xl overflow-hidden relative group'>
          <span className='overlay bg-black/20 absolute inset-0 opacity-0 group-hover:opacity-100 duration-300'></span>
            <img src={card?.images[0]?.url} alt='place' className='h-full w-full object-cover' />
          </div>
          <div className='card-body mt-3 mx-2 flex flex-col'>
            <h3 className='text-lg font-semibold mb-2 '>{card?.title}</h3>
            <p className=' flex items-center gap-1 '>
              {card?.description.slice(0 , 25)}...
            </p>
            <p className='flex-grow' >${card?.price_per_day}</p>
          </div>
        </Link>
    </>
  )
}

export default memo(PlaceCard)
