import React, { memo, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { request } from '../../api/request';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {

  const [loading , setLoading] = useState(false)



  const { register, handleSubmit, formState: { errors } , reset } = useForm();
  const onSubmit = (data) => {
    setLoading(true)
    request.post("contactus" , data)
    .then((res)=>{
      setLoading(false)
      toast.success(res.data.message);
      reset()
      
    })
    .catch((err)=>{
      toast.error(err.response.data.message);
      setLoading(false)
    })
  }
  

const {t} = useTranslation()


  return (
    <>
<form onSubmit={handleSubmit(onSubmit)} className='w-full relative z-10'>
  <div className="my-4 mb-6">
    <label htmlFor="name" className="mb-3 mr-6 ltr:mr-0 ltr:ml-6 block text-sm font-medium">{t("contact.form.name")}</label>
    <div className='package-input'>
      <span><i className="fas fa-user"></i></span>
      <input id="name" className='input' {...register('name', { required: true })} placeholder={t("contact.form.name")} />
    </div>
    {errors.name && errors.name.type === 'required' && <p className='text-danger'>{t("contact.validation.name")}</p>}
  </div>

  <div className="my-4 mb-6">
    <label htmlFor="email" className="mb-3 mr-6 ltr:mr-0 ltr:ml-6 block text-sm font-medium">{t("contact.form.email")}</label>
    <div className='package-input'>
      <span><i className="fas fa-envelope"></i></span>
      <input id="email" className='input' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder={t("contact.form.email")} />
    </div>
    {errors.email && errors.email.type === 'required' && <p className='text-danger'>{t("contact.validation.email")}</p>}
    {errors.email && errors.email.type === 'pattern' && <p className='text-danger'>{t("contact.validation.emailInvalid")}</p>}
  </div>

  <div className="my-4 mb-6">
    <label htmlFor="message" className="mb-3 mr-6 ltr:mr-0 ltr:ml-6 block text-sm font-medium">{t("contact.form.message")}</label>
    <div className='package-input'>
      <span><i className="fas fa-comment"></i></span>
      <textarea id="message" rows="5" cols="7" className='input' {...register('message', { required: true })} placeholder={t("contact.form.message")}></textarea>
    </div>
    {errors.message && errors.message.type === 'required' && <p className='text-danger'>{t("contact.validation.message")}</p>}
  </div>

  <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>
    {loading ? <Spin/> : t("contact.form.send")}
  </button>
</form>


    </>
  )
}

export default memo(ContactForm)
