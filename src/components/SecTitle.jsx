import React from 'react'
import { twMerge } from 'tailwind-merge'

const SecTitle = ({head , body , sx}) => {
  return (
    <>
      <div className={twMerge(`text-center md:text-right ltr:md:text-left mb-10 ${sx}`)}>
        <h2 className='text-2xl md:text-4xl font-semibold mb-1 md:mb-2'>{head}</h2>
        <p className='text-neutral-500 text-lg md:text-xl'>{body}</p>
      </div>
    </>
  )
}

export default SecTitle
