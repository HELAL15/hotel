import React, { memo, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import StyledAnim from '../../components/StyledAnim';
import { request } from '../../api/request';
import { toast } from 'react-toastify';
import { Spin } from 'antd';
import { FaEye } from 'react-icons/fa6';
import { IoEyeOff } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/userSlice';
import { useTranslation } from 'react-i18next';

const Login = () => {

  const {t} = useTranslation()

  // const navigate = useNavigate()
  const [loading , setLoading] = useState(false)
  const [type , setType] = useState(false)
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setLoading(true)
    request.post("user/login" , data)
    .then((res)=>{
      setLoading(false)
      const userData = res.data.data
      // setUser(userData)
      const token = res.data.data.token
      // set token in cookies
      localStorage.setItem('hotel' , token);
      dispatch(setUser(userData))

      window.history.back();
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
      <section className='relative mt-10'>
        <StyledAnim/>
        <div className='container mx-auto'>
          <div className='w-full md:w-[500px] h-full py-5 m-auto'>
          <h2 className='heading-center'>{t('login.head')}</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full relative z-10'>
          <div className="my-4">
            <div className='package-input' >
              <span><i className="fas fa-envelope"></i></span>
              <input className='input' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder={t("login.email")} />
            </div>
            {errors.email && errors.email.type === 'required' && <p className='text-danger'>{t("login.validation.email")}</p>}
            {errors.email && errors.email.type === 'pattern' && <p className='text-danger'>{t("login.validation.emailInvalid")}</p>}
          </div>
          <div className="my-4">
            <div className='package-input' >
              <span><i className="fas fa-lock"></i></span>
              <input className='input' type={type ? "text" : "password"} {...register('password', { required: true, minLength: 6 })} placeholder={t("login.password")} />
              <button type="button" className="show-pass" toggle="#pass" onClick={()=>changeType()}>
              <i className='text-2xl'>{type ? <FaEye /> : <IoEyeOff />}</i>
              </button>
            </div>
            {errors.password && errors.password.type === 'required' && <p className='text-danger'>{t("login.validation.password")}</p>}
            {errors.password && errors.password.type === 'minLength' && <p className='text-danger'>{t("login.validation.passwordInvalid")}</p>}
          </div>

            <Link to="/forgetpassword" className="forget my-2 block text-start ">{t("login.forgot")}</Link>

            <button type="submit" className="btn btn-primary w-full" disabled={loading}>{loading? <Spin/> : t("login.login")}</button>
            <div className='my-4 text-gray-500 text-center'>
            <span className='mx-2'>{t("login.new")}</span>
              <Link to="/register" className="forget mb-4 underline">{t("login.register")}</Link>
            </div>
    </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(Login)
