import React, { memo } from 'react'

const Card = ({content}) => {
  return (
    <div key={content.id} className='flex flex-col gap-4 items-center justify-stretch bg-primary/10 py-4 px-4 rounded-[30px] duration-300 hover:bg-primary/30 hover:scale-105 hover:-translate-y-5 '>
      <img loading='lazy' src={content.icon} alt={content.title} className='aspect-square rounded-full object-cover w-[80px] h-[80px] m-auto' />
      <h3 className='text-lg font-bold text-gray-800'>{content.title}</h3>
      <p className='text-gray-600 text-lg text-center flex-grow'>{content.description}</p>
    </div>
  )
}

export default memo(Card)
