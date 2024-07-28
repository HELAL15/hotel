import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { CheckCode } from '../../context/CheckCode';
import { toast } from 'react-toastify';
import { request } from '../../api/request';
import { useForm } from 'react-hook-form';
import { Spin } from 'antd';
import { FaEye } from 'react-icons/fa6';
import { IoEyeOff } from 'react-icons/io5';
import  Container  from "../../helpers/Container"
import { useDispatch, useSelector } from 'react-redux';
import { setCodeReady } from '../../redux/features/forgetPasswordSlice';

const RenterPassword = () => {
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

  return (
    <section className='mt-10'>
    <Container>
        <h2 className='text-3xl capitalize mb-10 text-center'>اعادة تعيين كلمة المرور</h2>
        <form onSubmit={handleSubmit(onSubmit)} className=' w-full md:w-[500px] h-full py-5 m-auto'>
        <div className="my-4">
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>كلمة المرور الجديدة</label>
          <div className='package-input'>
            <input
              id='password'
              type={types.password ? "text" : "password"}
              className={`input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.password ? 'border-red-500' : ''}`}
              {...register('password', { required: 'هذا الحقل مطلوب', minLength: { value: 6, message: 'كلمة المرور يجب أن تكون على الأقل 6 أحرف' } })}
            />
            
            <button type="button" className="show-pass" onClick={() => changeType('password')}>
            <i className='text-2xl'>{types.password ? <FaEye /> : <IoEyeOff />}</i>
          </button>
          </div>
            {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
        </div>
          
          <div className='my-4'>
            <label htmlFor='password_confirmation' className='block text-sm font-medium text-gray-700'>تأكيد كلمة المرور</label>
          <div className='package-input'>
            <input
              id='password_confirmation'
              type={types.password_confirmation ? "text" : "password"}
              className={`input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.password_confirmation ? 'border-red-500' : ''}`}
              {...register('password_confirmation', {
                required: 'هذا الحقل مطلوب',
                validate: value => value === watch('password') || 'كلمتا المرور غير متطابقتين'
              })}
            />
            <button type="button" className="show-pass" onClick={() => changeType('password_confirmation')}>
            <i className='text-2xl'>{types.password_confirmation ? <FaEye /> : <IoEyeOff />}</i>
          </button>
          </div>
            {errors.password_confirmation && <span className='text-red-500 text-sm'>{errors.password_confirmation.message}</span>}
          </div>
          
          <button type='submit' className='btn btn-primary w-full' disabled={loading}>
            {loading ? <Spin/> : 'إعادة تعيين كلمة المرور'}
          </button>
        </form>
    </Container>
    </section>
  );
};

export default RenterPassword;
