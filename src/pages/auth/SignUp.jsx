import React, { memo, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import StyledAnim from '../../components/StyledAnim';
import { request } from '../../api/request';
import { UserContext } from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import Cookie from 'cookie-universal';

const SignUp = () => {
  const [type, setType] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password');


  const navigate = useNavigate()

  const {setUser , user} = useContext(UserContext)

  // cookies
const cookie = Cookie();

const [loading , setLoading] = useState(false)

const onSubmit = (data) => {
  setLoading(true)
  request.post("user/register" , data)
  .then((res)=>{

    setLoading(false)
    const userData = res.data.data
    setUser(userData)
    console.log(user);
    const token = res.data.data.token
    // set token in cookies
    sessionStorage.set('Itemhotel' , token);
      sessionStorage.set('Itemuser-info' , userData)
    navigate('/')
    toast.success(res.data.message);
    
  })
  .catch((err)=>{
    toast(err.response.data.message);
    console.log(err)
    setLoading(false)
  })
}
  
  const changeType = () => {
    setType(!type);
  };

  return (
    <>
    <ToastContainer/>
      <section className='relative'>
        <StyledAnim />
        <div className='container mx-auto'>
          <div className='w-full md:w-[500px] h-full py-5 m-auto'>
            <h2 className='text-3xl capitalize mb-10 relative z-10 text-center'>إنشاء حساب</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full relative z-10'>
              <div className="my-4">
                <div className='package-input' >
                  <span><i className="fas fa-envelope"></i></span>
                  <input className='input' {...register('first_name', { required: true })} placeholder="الاسم الاول" />
                </div>
                {errors.firstName && <p className='text-danger'>First Name is required</p>}
              </div>
              <div className="my-4">
                <div className='package-input' >
                  <span><i className="fas fa-envelope"></i></span>
                  <input className='input' {...register('last_name', { required: true })} placeholder="الاسم الاخير" />
                </div>
                {errors.lastName && <p className='text-danger'>Last Name is required</p>}
              </div>
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
                  <button type="button" className="show-pass" onClick={changeType}>
                    <i className={`fas fa-eye${type ? "" : "-slash"}`}></i>
                  </button>
                </div>
                {errors.password && errors.password.type === 'required' && <p className='text-danger'>Password is required</p>}
                {errors.password && errors.password.type === 'minLength' && <p className='text-danger'>Password must be at least 8 characters long</p>}
              </div>
              <div className="my-4">
                <div className='package-input' >
                  <span><i className="fas fa-lock"></i></span>
                  <input className='input' type={type ? "text" : "password"} {...register('password_confirmation', { required: true, validate: value => value === password })} placeholder="تأكيد كلمة المرور" />
                  <button type="button" className="show-pass" onClick={changeType}>
                    <i className={`fas fa-eye${type ? "" : "-slash"}`}></i>
                  </button>
                </div>
                {errors.confirmPassword && errors.confirmPassword.type === 'required' && <p className='text-danger'>Confirm Password is required</p>}
                {errors.confirmPassword && errors.confirmPassword.type === 'validate' && <p className='text-danger'>Passwords do not match</p>}
              </div>
              <div className='my-4 text-gray-500 text-center'>
                <span className='mx-2'> لديك حساب؟</span>
                <Link to="/login" className="forget mb-4 underline">تسجيل الدخول</Link>
              </div>
              <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>{loading? "loading..." : "انشاء حساب"}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(SignUp);
