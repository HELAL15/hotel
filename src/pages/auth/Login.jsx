import React, { memo, useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import StyledAnim from '../../components/StyledAnim';
import { request } from '../../api/request';
import Cookie from 'cookie-universal';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../../context/UserContext';

const Login = () => {

  const navigate = useNavigate()

  // const {setUser , user} = useContext(UserContext)

// cookies
const cookie = Cookie();

  const [loading , setLoading] = useState(false)


  const [type , setType] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setLoading(true)
    request.post("user/login" , data)
    .then((res)=>{
      setLoading(false)
      const userData = res.data.data
      // setUser(userData)
      // console.log(user);
      const token = res.data.data.token
      // set token in cookies
      sessionStorage.setItem('hotel' , token);
      sessionStorage.setItem('user-info' , userData)
      navigate('/')
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
          <h2 className='text-3xl capitalize mb-10 relative z-10 text-center'>تسجيل الدخول</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full relative z-10'>
          <div className="my-4">
            <div className='package-input' >
              <span><i className="fas fa-envelope"></i></span>
              <input className='input' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="البريد الإلكتروني" />
            </div>
            {errors.email && errors.email.type === 'required' && <p className='text-danger'>Email is required</p>}
            {errors.email && errors.email.type === 'pattern' && <p className='text-danger'>Invalid email format</p>}
          </div>
          <div className="my-4">
            <div className='package-input' >
              <span><i className="fas fa-lock"></i></span>
              <input className='input' type={type ? "text" : "password"} {...register('password', { required: true, minLength: 8 })} placeholder="كلمة المرور" />
              <button type="button" className="show-pass" toggle="#pass" onClick={()=>changeType()}>
                <i className={`fas fa-eye${type? "" : "-slash"}`}></i>
              </button>
            </div>
            {errors.password && errors.password.type === 'required' && <p className='text-danger'>Password is required</p>}
            {errors.password && errors.password.type === 'minLength' && <p className='text-danger'>Password must be at least 8 characters long</p>}
          </div>

            <div className='my-5 text-gray-500 text-right'>
              <Link to="/forgetpassword" className="forget mb-4 ">هل نسيت كلمة المرور؟</Link>
            </div>
            <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>{loading? "loading..." : "دخول"}</button>
            <div className='my-4 text-gray-500 text-center'>
            <span className='mx-2'>مستخدم جديد؟</span>
              <Link to="/register" className="forget mb-4 underline">إنشاء حساب جديد</Link>
            </div>
    </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(Login)
