import React, { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import Seo from '../../helpers/Seo';
import Container from '../../helpers/Container';
import SecTitle from '../../components/SecTitle';
import StyledAnim from '../../components/StyledAnim';
import { request } from '../../api/request';
import { ToastContainer, toast } from 'react-toastify';

const AccountPassword = () => {
  const [loading , setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const newPassword = watch('password_confirmation');

  const onSubmit = (data) => {
    setLoading(true)
  request.post("user/change-password" , data)
  .then((res)=>{
    setLoading(false)
    const userData = res.data.data
    const token = res.data.data.token
    // set token in cookies
    sessionStorage.setItem('hotel' , token);
      sessionStorage.setItem('user-info' , userData)
      toast.success(res.data.message);
    
  })
  .catch((err)=>{
    toast.error(err.response.data.message);
    setLoading(false)
  })
  };

  return (
    <>

      <Seo title="account-password" />
      <section className='relative'>

        <Container>
          <SecTitle head="update your password" />
          <form className='relative z-20' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 mb-8'>
              <div className='md:col-span-2'>
                <label htmlFor="current_password" className='block text-sm font-medium mx-4 mb-3'>Old Password</label>
                <input
                  type="password"
                  name="current_password"
                  id="current_password"
                  autoComplete="current_password"
                  className='input'
                  {...register("current_password", { required: "Old password is required" })}
                />
                {errors.old_password && <span className='text-red-500 mx-4'>{errors.old_password.message}</span>}
              </div>
              <div>
                <label htmlFor="password" className='block text-sm font-medium mx-4 mb-3'>New Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className='input'
                  {...register("password", { required: "New password is required" })}
                />
                {errors.new_password && <span className='text-red-500 mx-4'>{errors.new_password.message}</span>}
              </div>
              <div>
                <label htmlFor="password_confirmation" className='block text-sm font-medium mx-4 mb-3'>Confirm Password</label>
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  autoComplete="password_confirmation"
                  className='input'
                  {...register("password_confirmation", {
                    required: "Confirm password is required",
                    validate: value => value === newPassword || "Passwords do not match"
                  })}
                />
                {errors.confirm_password && <span className='text-red-500 mx-4'>{errors.confirm_password.message}</span>}
              </div>
            </div>
            <button type="submit" className='btn btn-primary' disabled={loading}>{loading? "loading..." : "update password"}</button>
          </form>
        </Container>
      </section>
    </>
  );
};

export default memo(AccountPassword);
