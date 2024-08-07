import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { request } from '../../api/request';
import { useForm } from 'react-hook-form';
import { Spin } from 'antd';
import { FaEye } from 'react-icons/fa6';
import { IoEyeOff } from 'react-icons/io5';
import  Container  from "../../helpers/Container"
import { useDispatch, useSelector } from 'react-redux';
import { setCodeReady } from '../../redux/features/forgetPasswordSlice';
import StyledAnim from '../../components/StyledAnim';
import { useTranslation } from 'react-i18next';
import Seo from '../../helpers/Seo';

const RenterPassword = () => {

const {t} = useTranslation()


  const email = useSelector((state)=>state.forgetPassword.email)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } , watch } = useForm();
  
  const onSubmit = (data) => {
    const password = new FormData();
    password.append('email', email);
    password.append('password', data.password);
    password.append('password_confirmation', data.password_confirmation);

    setLoading(true);
    
    request.post("/user/reset-password", password)
      .then((res) => {
        setLoading(false);
        navigate('/login');
        toast.success(res.data.message);
        dispatch(setCodeReady(false))
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };


  const [types, setTypes] = useState({ password: false, password_confirmation: false });

const changeType = (field) => {
  setTypes(prevTypes => ({ ...prevTypes, [field]: !prevTypes[field] }));
};

  return (<>

    <Seo title="changePass" />
    <section className='mt-10 relative'>
    <StyledAnim/>
    <Container>
        <h2 className='heading-center'>{t("changePass.head")}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className=' w-full md:w-[500px] h-full py-5 m-auto relative z-10'>
        <div className="my-4">
          <div className='package-input'>
            <input
              id='password'
              type={types.password ? "text" : "password"}
              className={`input `}
              placeholder={t("changePass.password")}
              {...register('password', { required: t("changePass.validation.password") , minLength: { value: 6, message: t("changePass.validation.passwordInvalid")} })}
            />
            
            <button type="button" className="show-pass" onClick={() => changeType('password')}>
            <i className='text-2xl'>{types.password ? <FaEye /> : <IoEyeOff />}</i>
          </button>
          </div>
            {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
        </div>
          
          <div className='my-4'>
          <div className='package-input'>
            <input
              id='password_confirmation'
              type={types.password_confirmation ? "text" : "password"}
              className={`input `}
              placeholder={t("changePass.confirm")}
              {...register('password_confirmation', {
                required: t("changePass.validation.confirm"),
                validate: value => value === watch('password') || t("changePass.validation.confirmInvalid")
              })}
            />
            <button type="button" className="show-pass" onClick={() => changeType('password_confirmation')}>
            <i className='text-2xl'>{types.password_confirmation ? <FaEye /> : <IoEyeOff />}</i>
          </button>
          </div>
            {errors.password_confirmation && <span className='text-red-500 text-sm'>{errors.password_confirmation.message}</span>}
          </div>
          
          <button type='submit' className='btn btn-primary w-full' disabled={loading}>
            {loading ? <Spin/> : t("changePass.change")}
          </button>
        </form>
    </Container>
    </section>
  </>
  );
};

export default RenterPassword;
