import React, { memo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { ToastContainer, toast } from 'react-toastify';
import { Flex , Rate } from "antd";
import Review from './Review';

const Reviews = () => {
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [value, setValue] = useState(3);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace with your SignUp logic
    toast(data.review)
  };
  return (
    <>
          <ToastContainer/>
      <div className='my-4 rounded-[30px] border border-neutral-200 overflow-hidden p-4'>
              <h2 className='text-2xl font-semibold pb-4 relative border-b border-b-neutral-200 w-fit '>Reviews {`(${23} reviews)`}</h2>
              <Flex gap="middle" vertical className='mt-5'>
                <Rate tooltips={desc} onChange={setValue} value={value} />
                {/* {value ? <span>{desc[value - 1]}</span> : null} */}
              </Flex>
              <form onSubmit={handleSubmit(onSubmit)} className='w-full relative z-10'>
              <div className="my-4">
                <div className='package-input' >
                  <span><i className="fas fa-envelope"></i></span>
                  <textarea  rows={5} className={twMerge('input py-5 h-auto')} {...register('review', { required: true })} placeholder="your review" />
                </div>
                {errors.review && <p className='text-danger'>review is required</p>}
              </div>
              <button type="submit" className="btn btn-primary w-full mt-2">add review</button>
            </form>
              <div className='reviews mt-8 '>
                
                <Review/>

              </div>
              </div>
    </>
  )
}

export default memo(Reviews)
