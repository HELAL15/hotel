import React, { memo, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import Seo from '../../helpers/Seo';
import Container from '../../helpers/Container';
import SecTitle from '../../components/SecTitle';
import { request } from '../../api/request';
import { IoCamera } from "react-icons/io5";
import { Spin } from 'antd';

const Account = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { userDetails, setUserDetails } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(userDetails?.photo_profile);



  useEffect(() => {
    setPhoto(userDetails?.photo_profile);
  }, [userDetails]);


  const handleImgChange = (e) => {
    const file = e.target.files[0];
    setPhoto(URL.createObjectURL(file));
  };

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('photo_profile', data.photo_profile[0]);
      formData.append('first_name', data.first_name);
      formData.append('last_name', data.last_name);
      formData.append('email', data.email);

      const res = await request.post("user/update-profile", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setLoading(false);
      const userData = res.data.data;
      const token = res.data.data.token;

      setUserDetails(userData);

      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <>
      <Seo title="Profile" />
      <section className='relative'>
        <Container>
          <SecTitle head="Your Main Information" />
          <form onSubmit={handleSubmit(onSubmit)} className='w-full relative z-10'>
            <div className="my-4">
              <div className='package-input relative group w-[200px] h-[200px] border border-gray-300 overflow-hidden rounded-full'>
                <span className='absolute group-hover:opacity-100 opacity-0 top-0 left-0 bg-zinc-800/40 w-full h-full z-10 duration-300 grid place-items-center'>
                <IoCamera className='text-white text-3xl' />
                </span>
                <input 
                  className='absolute top-0 left-0 w-full h-full opacity-0 z-20' 
                  type="file" 
                  {...register('photo_profile', { required: true })} 
                  onChange={handleImgChange}
                />
                <img 
                  src={photo} 
                  className='absolute top-0 left-0 w-full h-full object-cover' 
                  alt="Profile" 
                />
              </div>
              {errors.photo_profile && <p className='text-danger'>Profile image is required</p>}
            </div>
            <div className="my-4">
              <div className='package-input'>
                <span><i className="fas fa-user"></i></span>
                <input className='input' {...register('first_name', { required: true })} 
                  defaultValue={userDetails?.name?.split(' ')[0] || ''}
                  placeholder="الاسم الأول" />
              </div>
              {errors.first_name && <p className='text-danger'>First Name is required</p>}
            </div>
            <div className="my-4">
              <div className='package-input'>
                <span><i className="fas fa-user"></i></span>
                <input className='input' {...register('last_name', { required: true })}
                  defaultValue={userDetails?.name?.split(' ')[1] || ''}
                  placeholder="الاسم الأخير" />
              </div>
              {errors.last_name && <p className='text-danger'>Last Name is required</p>}
            </div>
            <div className="my-4">
              <div className='package-input'>
                <span><i className="fas fa-envelope"></i></span>
                <input className='input' {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  defaultValue={userDetails?.email || ''}
                  placeholder="البريد الإلكتروني" />
              </div>
              {errors.email && errors.email.type === 'required' && <p className='text-danger'>Email is required</p>}
              {errors.email && errors.email.type === 'pattern' && <p className='text-danger'>Invalid email format</p>}
            </div>
            
            <button type="submit" className="btn btn-primary mt-4" disabled={loading}>
              {loading ? <Spin/> : 'update profile'}
            </button>
          </form>
        </Container>
      </section>
    </>
  );
};

export default memo(Account);
