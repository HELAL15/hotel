import React, { memo } from 'react'
import Seo from '../../helpers/Seo'
import Container from '../../helpers/Container'
import SecTitle from '../../components/SecTitle'
import { useForm } from 'react-hook-form'
import useFetch from '../../hooks/useFetch'


const Account = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const newPassword = watch('new_password');

  const onSubmit = (data) => {
    console.log(data);
    // Handle the form submission logic here
  };

  const {data} = useFetch("user/profile")
  const name = data?.data?.name?.split(" ")


  return (
    <>
          <Seo title="profile"  />
      <section className='relative'>
        <Container>
          <SecTitle head="your main information" />
          {/* <form className='relative z-20' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 mb-8'>
              <div className='md:col-span-2'>
                <label htmlFor="old_password" className='block text-sm font-medium mx-4 mb-3'>Old Password</label>
                <input
                  type="password"
                  name="old_password"
                  id="old_password"
                  autoComplete="old-password"
                  className='input'
                  {...register("old_password", { required: "Old password is required" })}
                />
                {errors.old_password && <span className='text-red-500 mx-4'>{errors.old_password.message}</span>}
              </div>
              <div>
                <label htmlFor="new_password" className='block text-sm font-medium mx-4 mb-3'>New Password</label>
                <input
                  type="password"
                  name="new_password"
                  id="new_password"
                  autoComplete="new-password"
                  className='input'
                  {...register("new_password", { required: "New password is required" })}
                />
                {errors.new_password && <span className='text-red-500 mx-4'>{errors.new_password.message}</span>}
              </div>
              <div>
                <label htmlFor="confirm_password" className='block text-sm font-medium mx-4 mb-3'>Confirm Password</label>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  autoComplete="confirm-password"
                  className='input'
                  {...register("confirm_password", {
                    required: "Confirm password is required",
                    validate: value => value === newPassword || "Passwords do not match"
                  })}
                />
                {errors.confirm_password && <span className='text-red-500 mx-4'>{errors.confirm_password.message}</span>}
              </div>
            </div>
            <button type="submit" className='btn btn-primary'>Update Password</button>
          </form> */}
          {data?.data.name.split(" ")}
          <hr/>
          {data?.data.email}
        </Container>
      </section>
    </>
  )
}

export default memo(Account)
