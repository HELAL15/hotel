import React, { memo, useState } from 'react';
import Container from '../../helpers/Container';
import { twMerge } from 'tailwind-merge';
import { Link, useNavigate } from 'react-router-dom';
import StyledAnim from '../StyledAnim';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { CiSearch } from 'react-icons/ci';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';

const { Option } = Select;

const Hero = () => {
  const lang = useSelector((state) => state.lang.value);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const setting = useSelector((state) => state.setting.value);
  
  const { data } = useFetch('about-slider', [lang]);
  const heroData = data?.data[0];
  
  const { title, description } = heroData || {};
  
  const navigate = useNavigate();
  
  const {
    max_no_guests,
    max_price_per_day,
    min_price_per_day
  } = setting?.data || {}
  const [prices, setPrices] = useState([min_price_per_day, max_price_per_day]);
  const [guests, setGuests] = useState(1);
  const [type, setType] = useState('room');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/rooms?no_guests=${guests}&type=${type}&from_price=${prices[0]}&to_price=${prices[1]}`);
  };

  return (
    <>
      <section className='py-10 relative'>
        <StyledAnim />
        <Container sx='relative z-10 h-full'>
          <div className={twMerge('h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 items-center')}>
            <div className=''>
              <img className='w-[110px] md:w-[200px] block mb-4 object-contain' src={setting?.data.logo} alt={setting?.data.site_name} />
              <h1 className='text-2xl md:text-3xl lg:text-5xl text-black capitalize font-semibold leading-6 '>{title}</h1>
              <p className='text-neutral-500 my-4 md:my-8 text-base md:text-lg'>{description}</p>
              <Link to="/listing-stay-map" className='btn btn-primary'>ابدأ البحث</Link>
            </div>
            <div className='hidden md:block h-full'>
              <Swiper
                className='h-full w-full rounded-3xl'
                modules={[Pagination, Autoplay]}
                dir={dir}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
              >
                {heroData?.icon.map((icon) => (
                  <SwiperSlide className='h-full w-full' key={icon.id}>
                    <div className='w-full h-full relative'>
                      <span className='overlay absolute top-0 left-0 bg-black/20 w-full h-full'></span>
                      <img src={icon.url} className='w-full h-full object-cover' />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className='mt-10'>
            <h4 className='mx-4 text-lg font-semibold mb-1'>بحث سريع</h4>
            <form onSubmit={handleSearch} className='mt-8 shadow-md grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center p-4 bg-white rounded-2xl md:divide md:divide-x-2 rtl:md:divide-x-reverse'>
              <div className='flex items-center justify-center flex-col'>
                <p className='text-start mb-2 font-medium'>السعر</p>
                <div className='flex items-center gap-2'>
                  <input 
                    type='number' 
                    className='w-1/2 input' 
                    placeholder='أقل سعر' 
                    value={prices[0]}
                    onChange={(e) => setPrices([+e.target.value, prices[1]])}
                  />
                  <input 
                    type='number' 
                    className='w-1/2 input' 
                    placeholder='أعلى سعر' 
                    value={prices[1]}
                    onChange={(e) => setPrices([prices[0], +e.target.value])}
                  />
                </div>
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='text-start mb-2 font-medium'>الضيوف</p>
                {/* <Select defaultValue="1" onChange={(value) => setGuests(value)}>
                {[...Array(max_no_guests)].map((_, index) => (
                <Option value={index + 1} key={index}>
                  {index + 1} {index + 1 === 1 ? "guest" : "guests"}
                </Option>
              ))}
                </Select> */}
                <input 
              type='number' 
              className='w-full input mt-2' 
              placeholder='no of guests' 
              value={guests}
              onChange={(e) => setGuests(+e.target.value)} />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='text-start mb-2 font-medium'>النوع</p>
                <Select defaultValue="" onChange={(value) => setType(value)}>
                  <Option value="" disabled>نوع الغرفة</Option>
                  <Option value="room">غرفة</Option>
                  <Option value="suite">جناح</Option>
                  <Option value="poo_view">pool view</Option>
                </Select>
              </div>
              <div className='flex items-center justify-center'>
                <button className='grid place-items-center w-[50px] h-[50px] bg-primary text-white text-2xl rounded-full font-bold'>
                  <CiSearch />
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default memo(Hero);
