import React, { memo, useState } from 'react';
import subscribe from '../img/SVG-subcribe2.webp';
import { FaArrowRightLong } from "react-icons/fa6";
import { toast } from 'react-toastify';
import Container from '../helpers/Container';
import { request } from '../api/request';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [empty, setEmpty] = useState(false);
  const [loading , setLoading] = useState(false)

  const handleChange = (e) => {
    setEmail(e.target.value);
  }
  const {t} = useTranslation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email !== '') {
        setLoading(true)
        const res = await request.post("/subscribe", { email });
        setEmpty(false);
        if (res.status === 200) {
          toast.success(res.data.message);
          setLoading(false)
        }
      } else {
        setEmpty(true);
        setLoading(false)
        toast.error(t("join.validation.email"));
        setTimeout(() => setEmpty(false), 1000); 
      }
    } catch (error) {
      setEmpty(true);
      toast.error(error.response?.data?.message || "An error occurred");
      setTimeout(() => setEmpty(false), 1000);
      setLoading(false)
    }
    setEmail('');
  }




  return (
    <>
      <section className=''>
        <Container sx="relative overflow-hidden">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center bg-primary/10 py-7 px-4 md:px-20 rounded-[30px]'>
            <div className='flex flex-col gap-3'>
              <h3 className='text-xl md:text-2xl font-semibold mb-1'>{t("join.head")}</h3>
              <p className='mb-4'>{t("join.subhead")}</p>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-3'>
                  <span className='w-[30px] h-[30px] text-primary bg-primary/10 grid place-items-center rounded-full '>01</span>
                  <span className='font-semibold text-black'>{t("join.first.placeholder")}</span>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='w-[30px] h-[30px] text-red-500 bg-red-500/10 grid place-items-center rounded-full '>02</span>
                  <span className='font-semibold text-black'>{t("join.second.placeholder")}</span>
                </div>
              </div>
              <form className='relative ' onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  name='email' 
                  value={email} 
                  onChange={handleChange} 
                  placeholder={t("join.email")}
                  className={`input input-primary pe-[400px] ${empty ? "animate-shake" : ""}`} 
                />
                <button 
                  aria-label='subscribe-newsletter' 
                  className='btn-primary p-0 w-[40px] h-[40px] bg-transparent grid place-items-center rounded-full absolute rtl:left-2 rtl:right-[unset] ltr:right-2 top-[50%] translate-y-[-50%]'
                >
                  {loading? <Spin/>:<FaArrowRightLong className='rtl:-scale-100' />}
                </button>
              </form>
            </div>
            <div>
              <img src={subscribe} alt="become an author" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default memo(Newsletter);
