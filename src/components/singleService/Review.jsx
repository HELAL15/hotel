import React, { memo } from 'react'
import img from '../../img/profile-img.jpg'
import { Flex , Rate } from "antd";
import { convertISOToDate } from '../../helpers/ConverIsoToDate';

const Review = ({reviews}) => {

  return (
    <>
      <div className='review flex gap-4 mb-5 pb-4 border-b border-b-neutral-200 last:border-b-0  '>
                  {/* <div className='w-[50px] h-[50px] overflow-hidden rounded-full md:flex-grow'>
                    <img src={img} alt='userphoto' className='w-[50px] h-[50px] object-cover aspect-square rounded-full ' />
                  </div> */}
                  <div className='flex-shrink w-[calc(100%-50px)]'>
                    <div className='review-head flex justify-between flex-wrap'>
                      <p className='flex flex-col font-semibold'>
                        <span className='text-black'>{reviews?.user_name}</span>
                        <span className=''>{convertISOToDate(reviews?.created_at)}</span>
                      </p>
                      <p className=''><Rate className='md:text-xl text-sm' disabled defaultValue={reviews?.rate} /></p>
                    </div>
                    <p className='review-body font-semibold mt-4'>{reviews?.review}</p>
                  </div>
                </div>
    </>
  )
}

export default memo(Review)
