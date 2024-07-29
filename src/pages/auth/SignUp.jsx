import React, { memo, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import StyledAnim from '../../components/StyledAnim';
import { request } from '../../api/request';
import { UserContext } from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import Cookie from 'cookie-universal';
import { Spin } from 'antd';
import { FaEye } from 'react-icons/fa6';
import { IoEyeOff } from "react-icons/io5";
import { useTranslation } from 'react-i18next';


const SignUp = () => {

  const {t} = useTranslation()


  const [type, setType] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password_confirmation');


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
    const token = res.data.data.token
    // set token in cookies
    sessionStorage.setItem('hotel' , token);
      sessionStorage.setItem('user-info' , userData)
      toast.success(res.data.message);
    navigate('/')
    
  })
  .catch((err)=>{
    toast.error(err.response.data.message);
    setLoading(false)
  })
}
  
const [types, setTypes] = useState({ password: false, password_confirmation: false });

const changeType = (field) => {
  setTypes(prevTypes => ({ ...prevTypes, [field]: !prevTypes[field] }));
};

  return (
    <>
     <section className='relative mt-10'>
  <StyledAnim />
  <div className='container mx-auto'>
    <div className='w-full md:w-[500px] h-full py-5 m-auto'>
      <h2 className='heading-center'>{t("register.head")}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full relative z-10'>
        <div className='my-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
          <div className="">
            <div className='package-input'>
              <input className='input' {...register('first_name', { required: true })} placeholder={t("register.firstName")} />
            </div>
            {errors.first_name && <p className='text-danger'>{t("register.validation.firstName")}</p>}
          </div>
          <div className="">
            <div className='package-input'>
              <input className='input' {...register('last_name', { required: true })} placeholder={t("register.lastName")} />
            </div>
            {errors.last_name && <p className='text-danger'>{t("register.validation.lastName")}</p>}
          </div>
        </div>
        <div className="my-4">
          <div className='package-input'>
            <input className='input' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder={t("register.email")} />
          </div>
          {errors.email && errors.email.type === 'required' && <p className='text-danger'>{t("register.validation.email")}</p>}
          {errors.email && errors.email.type === 'pattern' && <p className='text-danger'>{t("register.validation.emailInvalid")}</p>}
        </div>
        <div className="my-4">
          <div className='package-input'>
            <input
              className='input'
              type={types.password ? "text" : "password"}
              {...register('password', { required: true, minLength: 6 })}
              placeholder={t("register.password")}
            />
            <button type="button" className="show-pass" onClick={() => changeType('password')}>
              <i className='text-2xl'>{types.password ? <FaEye /> : <IoEyeOff />}</i>
            </button>
          </div>
          {errors.password && errors.password.type === 'required' && <p className='text-danger'>{t("register.validation.password")}</p>}
          {errors.password && errors.password.type === 'minLength' && <p className='text-danger'>{t("register.validation.passwordInvalid")}</p>}
        </div>
        <div className="my-4">
          <div className='package-input relative'>
            <input
              className='input'
              type={types.password_confirmation ? "text" : "password"}
              {...register('password_confirmation', { required: true, validate: value => value === password })}
              placeholder={t("register.confirm")}
            />
            <button type="button" className="show-pass" onClick={() => changeType('password_confirmation')}>
              <i className='text-2xl'>{types.password_confirmation ? <FaEye /> : <IoEyeOff />}</i>
            </button>
          </div>
          {errors.password_confirmation && errors.password_confirmation.type === 'required' && <p className='text-danger'>{t("register.validation.confirm")}</p>}
          {errors.password_confirmation && errors.password_confirmation.type === 'validate' && <p className='text-danger'>{t("register.validation.confirmInvalid")}</p>}
        </div>
        <div className='my-4 text-gray-500 text-center'>
          <span className='mx-2'>{t("register.exist")}</span>
          <Link to="/login" className="forget mb-4 underline">{t("register.login")}</Link>
        </div>
        <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>{loading ? <Spin /> : t("register.register")}</button>
      </form>
    </div>
  </div>
</section>

    </>
  );
};

export default memo(SignUp);
