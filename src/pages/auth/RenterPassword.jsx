import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { CheckCode } from '../../context/CheckCode';
import { toast } from 'react-toastify';
import { request } from '../../api/request';
import { useForm } from 'react-hook-form';

const RenterPassword = () => {
  const { email } = useContext(CheckCode);
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
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <section className='mt-10'>
      <div className='w-full md:w-[500px] h-full py-5 m-auto'>
        <h2 className='text-3xl capitalize mb-10 text-center'>اعادة تعيين كلمة المرور</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center flex-col gap-4'>
          <div className='w-full'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>كلمة المرور الجديدة</label>
            <input
              id='password'
              type='password'
              className={`input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.password ? 'border-red-500' : ''}`}
              {...register('password', { required: 'هذا الحقل مطلوب', minLength: { value: 6, message: 'كلمة المرور يجب أن تكون على الأقل 6 أحرف' } })}
            />
            {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
          </div>
          
          <div className='w-full'>
            <label htmlFor='password_confirmation' className='block text-sm font-medium text-gray-700'>تأكيد كلمة المرور</label>
            <input
              id='password_confirmation'
              type='password'
              className={`input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.password_confirmation ? 'border-red-500' : ''}`}
              {...register('password_confirmation', {
                required: 'هذا الحقل مطلوب',
                validate: value => value === watch('password') || 'كلمتا المرور غير متطابقتين'
              })}
            />
            {errors.password_confirmation && <span className='text-red-500 text-sm'>{errors.password_confirmation.message}</span>}
          </div>
          
          <button type='submit' className='btn btn-primary w-full' disabled={loading}>
            {loading ? 'جارٍ الإرسال...' : 'إعادة تعيين كلمة المرور'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RenterPassword;
