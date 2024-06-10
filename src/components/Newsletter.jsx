import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import subscribe from '../img/SVG-subcribe2.webp'
import { FaArrowRightLong } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import Container from '../helpers/Container';
import StyledAnim from './StyledAnim';


const Newsletter = () => {

const [email , setEmail] =  useState('test@gmail.com');

const handleChange = (e) => {
  setEmail(e.target.value)
}

const handleSubmit = (e)=>{
  e.preventDefault()
  toast(email);
  setEmail('')
}





  return (
    <>
    <ToastContainer />
      <section className=''>
          <Container sx="relative overflow-hidden">
            {/* <StyledAnim/> */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center bg-primary/10 py-7 px-4 md:px-20 rounded-[30px]'>
                <div className='flex flex-col gap-3'>
                  <h3 className='text-4xl font-semibold'>Join our newsletter 🎉</h3>
                  <p className='text-neutral-500'>Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'>
                      <span className='w-[30px] h-[30px] text-primary bg-primary/10 grid place-items-center rounded-full '>01</span>
                      <span className='font-semibold text-black'>Get more discount</span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <span className='w-[30px] h-[30px] text-red-500 bg-red-500/10 grid place-items-center rounded-full '>02</span>
                      <span className='font-semibold text-black'>Get premium magazines</span>
                    </div>
                  </div>
                  <form className='relative ' onSubmit={handleSubmit}>
                    <input type="email" name='email' value={email} onChange={handleChange} placeholder='Enter your email address' className='input input-primary pe-[400px]'/>
                    <button className=' btn-primary p-0 w-[40px] h-[40px] bg-transparent grid place-items-center rounded-full absolute rtl:left-2 rtl:right-[unset] ltr:right-2 top-[50%] translate-y-[-50%]'>
                      <FaArrowRightLong/>
                    </button>
                  </form>
                </div>
                <div>
                  <img src={subscribe} alt="become an author" />
                </div>
            </div>
          </Container>
      </section>
    </>
  )
}

export default memo(Newsletter)
