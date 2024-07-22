import React, { memo, useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import StyledAnim from '../../components/StyledAnim';
import { request } from '../../api/request';
import { toast } from 'react-toastify';
import { CheckCode } from '../../context/CheckCode';
import { Spin } from 'antd';

const ForgetPassword = () => {


const {setCodeReady , setEmail} = useContext(CheckCode)


  const navigate = useNavigate()

  const [loading , setLoading] = useState(false)

  const [type , setType] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setLoading(true)
    request.post("/user/forget-password" , data)
    .then((res)=>{
      console.log(data);
      setLoading(false)
      setEmail(data.email)
      setCodeReady(true)
      navigate('/otp-code')
      toast.success(res.data.message);
    })
    .catch((err)=>{
      toast.error(err.response.data.message);
      setLoading(false)
    })
  }
  
  const changeType = () =>{
    setType(!type)
  }




  return (
    <>
      <section className='relative'>
        <StyledAnim/>
        <div className='container mx-auto'>
          <div className='w-full md:w-[500px] h-full py-5  m-auto'>
          <h2 className='text-3xl capitalize mb-10 relative z-10 text-center'>ادخل البريد الإلكتروني</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full relative z-10'>
          <div className="my-4">
            <div className='package-input' >
              <input className='input' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="البريد الإلكتروني" />
            </div>
            {errors.email && errors.email.type === 'required' && <p className='text-danger'>Email is required</p>}
            {errors.email && errors.email.type === 'pattern' && <p className='text-danger'>Invalid email format</p>}
          </div>
            <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>{loading? <Spin/> : "التالي"}</button>
    </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(ForgetPassword)
