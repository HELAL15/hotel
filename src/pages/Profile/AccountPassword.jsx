import React, { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import Seo from '../../helpers/Seo';
import Container from '../../helpers/Container';
import SecTitle from '../../components/SecTitle';
import StyledAnim from '../../components/StyledAnim';
import { request } from '../../api/request';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Spin } from 'antd';

const AccountPassword = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const newPassword = watch('password');

  const onSubmit = (data) => {
    setLoading(true);
    request.post("user/change-password", data)
      .then((res) => {
        setLoading(false);
        const userData = res.data.data;
        const token = res.data.data.token;
        // set token in cookies
        localStorage.setItem('hotel', token);
        localStorage.setItem('user-info', userData);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
  };

  const pageTransition = {
    type: "spring",
    duration: 0.5
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Seo title="account-password" />
      <section className='relative'>
        <SecTitle head="profile.password.head" />
        <form className='relative z-20' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 mb-8'>
            <div className='md:col-span-2'>
              <input
                type="password"
                name="current_password"
                placeholder={t("profile.password.password")}
                autoComplete="current_password"
                className='input'
                {...register("current_password", { required: t('profile.password.validation.password') })}
              />
              {errors.current_password && <span className='text-red-500 mx-4'>{errors.current_password.message}</span>}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder={t('profile.password.newPassword')}
                autoComplete="new-password"
                className='input'
                {...register("password", { required: true ,  minLength: 6 } )}
              />
              {errors.password && <span className='text-red-500 mx-4'>{errors.password.message}</span>}
              {errors.password && errors.password.type === 'required' && <p className='text-danger'>{t('profile.password.validation.newPassword')}</p>}
              {errors.password && errors.password.type === 'minLength' && <p className='text-danger'>{t('profile.password.validation.passwordInvalid')}</p>}
            </div>
            <div>
              <input
                type="password"
                name="password_confirmation"
                placeholder={t('profile.password.confirm')}
                autoComplete="new-password"
                className='input'
                {...register("password_confirmation", {
                  required: t('profile.password.validation.confirm'),
                  validate: value => value === newPassword || t('profile.password.validation.confirmInvalid')
                })}
              />
              {errors.password_confirmation && <span className='text-red-500 mx-4'>{errors.password_confirmation.message}</span>}
            </div>
          </div>
          <button type="submit" className='btn btn-primary' disabled={loading}>
            {loading ? <Spin/> : t('profile.password.change')}
          </button>
        </form>
      </section>
    </motion.div>
  );
};

export default memo(AccountPassword);
