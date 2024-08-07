import React, { useState } from 'react';
import Container from '../../helpers/Container';
import { request } from '../../api/request';
import OTP from 'antd/es/input/OTP';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import StyledAnim from '../../components/StyledAnim';
import { useTranslation } from 'react-i18next';
import Seo from '../../helpers/Seo';

const Otp = () => {

  const {t} = useTranslation()


  const email = useSelector((state)=>state.forgetPassword.email)
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange = (code) => {
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
          <Seo title="otp" />
      <section className='mt-10 relative'>
      <StyledAnim/>
        <Container>
          <form onSubmit={handleClick} className='w-full md:w-[500px] h-full py-5 m-auto relative z-10'>
            <h2 className='heading-center'>{t("otp.head")}</h2>
            <div className='flex items-center justify-center flex-col gap-4'>
              <OTP length={4} onChange={handleChange} />
              <button className='btn btn-primary w-full' disabled={loading}>
                {loading ? <Spin/> : t("otp.next")}
              </button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
};

export default Otp;
