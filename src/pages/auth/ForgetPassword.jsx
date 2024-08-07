import React, { memo, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import StyledAnim from '../../components/StyledAnim';
import { request } from '../../api/request';
import { toast } from 'react-toastify';
import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { setCodeReady, setEmail } from '../../redux/features/forgetPasswordSlice';
import { useTranslation } from 'react-i18next';
import Seo from '../../helpers/Seo';

const ForgetPassword = () => {

const {t} = useTranslation()


const dispatch = useDispatch()


  const navigate = useNavigate()

  const [loading , setLoading] = useState(false)

  const [type , setType] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setLoading(true)
    request.post("/user/forget-password" , data)
    .then((res)=>{
      setLoading(false)
      dispatch(setEmail(data.email))
      // setCodeReady(true)
      dispatch(setCodeReady(true))
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
        <Seo title="forgetPass" />
      <section className='relative mt-10'>
        <StyledAnim/>
        <div className='container mx-auto'>
          <div className='w-full md:w-[500px] h-full py-5  m-auto'>
          <h2 className='heading-center'>{t("forgetPass.head")}</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full relative z-10'>
          <div className="my-4">
            <div className='package-input' >
              <input className='input' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder={t("forgetPass.email")} />
            </div>
            {errors.email && errors.email.type === 'required' && <p className='text-danger'>{t("forgetPass.validation.email")}</p>}
            {errors.email && errors.email.type === 'pattern' && <p className='text-danger'>{t("forgetPass.validation.emailInvalid")}</p>}
          </div>
            <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>{loading? <Spin/> : t("forgetPass.next")}</button>
    </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(ForgetPassword)
