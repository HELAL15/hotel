import React, { memo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { toast } from 'react-toastify';
import { Flex , Rate, Spin } from "antd";
import Review from './Review';
import { request } from '../../api/request';
import { useNavigate, useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';

const Reviews = ({ load }) => {
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [value, setValue] = useState(3);
  const [loading , setLoading] = useState(false)
  

  const {id} = useParams()

  const {data:reviews , refetch} = useFetch(`/rooms/${id}/reviews`)
  const { register, handleSubmit, formState: { errors } , reset } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const formData = new FormData()
    formData.append('rate', value)
    formData.append('review', data.review)
    setLoading(true)
    request.post(`user/rooms/${id}/review`, formData)
    .then((res)=>{
      refetch()
      setLoading(false)
      toast.success(res.data.message)
      reset()
    })
    .catch((error)=>{
      toast.error(error.response.data.message)
      setLoading(false)
      navigate("/login")
    })
  };
  return (
    <>
      <div className='my-4 rounded-[30px] border border-neutral-200 overflow-hidden p-4'>
              <h2 className='text-2xl font-semibold pb-4 relative border-b border-b-neutral-200 w-fit '>Reviews {`(${reviews?.data.length} reviews)`}</h2>
              <Flex gap="middle" vertical className='mt-5'>
                <Rate tooltips={desc} onChange={setValue} value={value} />
              </Flex>
              <form onSubmit={handleSubmit(onSubmit)} className='w-full relative z-10'>
              <div className="my-4">
                <div className='package-input' >
                  <span><i className="fas fa-envelope"></i></span>
                  <textarea  rows={5} className={twMerge('input py-5 h-auto')} {...register('review', { required: true })} placeholder="your review" />
                </div>
                {errors.review && <p className='text-danger'>review is required</p>}
              </div>
              <button type="submit" className="btn btn-primary w-full mt-2">{loading? <Spin/> : "add review"}</button>
            </form>
              <div className='reviews mt-8 '>
              {
                reviews?.data.reverse().map((review)=>{
                  return <Review key={review.id} reviews={review} loading={load}/>
                })
              }

              </div>
              </div>
    </>
  )
}

export default memo(Reviews)
