import React, { memo } from 'react'
import Skeleton from 'react-loading-skeleton'

const StayInfo = ({description , loading}) => {
  return (
    <>
      <div className='my-4 rounded-[30px] border border-neutral-200 overflow-hidden p-4'>
        <h2 className='text-2xl font-semibold pb-4 relative border-b border-b-neutral-200 w-fit'>description</h2>
        {
          loading ? <Skeleton className=' px-6 py-8 rounded-[30px] my-4' /> :
          <p className='mt-5 font-[500]'>{description}</p>
        }
      </div>
    </>
  )
}

export default memo(StayInfo)
