import React, { useContext, useState } from 'react';
import Container from '../../helpers/Container';
import { request } from '../../api/request';
import { CheckCode } from '../../context/CheckCode';
import OTP from 'antd/es/input/OTP';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Spin } from 'antd';

const Otp = () => {
  const { email } = useContext(CheckCode);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange = (code) => {
    console.log(code);
    setOtp(code);
  };

  const handleClick = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      const res = await request.post('/user/check-code', { email: email, code: otp });
      toast.success(res.data.message)
      navigate("/enter-new-password")
    } catch (err) {
      toast.error(err.response.data.message)
      navigate("/forgetpassword")
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className='mt-10'>
        <Container>
          <form onSubmit={handleClick} className='w-full md:w-[500px] h-full py-5 m-auto'>
            <h2 className='text-3xl capitalize mb-10 text-center'>ادخل الرمز المرسل</h2>
            <div className='flex items-center justify-center flex-col gap-4'>
              <OTP length={4} onChange={handleChange} />
              <button className='btn btn-primary w-full' disabled={loading}>
                {loading ? <Spin/> : 'Send'}
              </button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
};

export default Otp;
