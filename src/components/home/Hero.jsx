import React, { memo, useState } from 'react';
import Container from '../../helpers/Container';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';
import StyledAnim from '../StyledAnim';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Empty, Select, Slider } from 'antd';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import Skeleton from 'react-loading-skeleton';

const { Option } = Select;

const Hero = () => {
  const lang = useSelector((state) => state.lang.value);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const setting = useSelector((state) => state.setting.value);
  
  const { data , isLoading } = useFetch('/about-slider', [lang]);
  const heroData = data?.data[0];
  
  const { title, description } = heroData || {};
  
  const navigate = useNavigate();
  
  const {
    max_no_guests:maxGuest,
    max_price_per_day:max,
    min_price_per_day:min
  } = setting?.data || {}


  const defaultPrice = [min, max]
  const [prices, setPrices] = useState([min, max]);
  const [guests, setGuests] = useState(null);
  const [type, setType] = useState('room');

  const onChange = (value) => {
    setPrices(value)
  }
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/rooms?no_guests=${guests}&type=${type}&from_price=${prices[0]}&to_price=${prices[1]}`);
  };



  return (
    <>
      <section className='mt-5 relative '>
        <StyledAnim />
        <Container sx='relative z-10 h-full'>
          <div className={twMerge('h-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center')}>
            <div className='order-2 md:order-1 mt-4 md:mt-0'>
            {
              title ? 
              <h1 className=' text-xl md:text-3xl leading-6 md:leading-[3rem] text-black capitalize font-bold  '>{title}</h1> :
              isLoading ? <Skeleton width={200} className='mb-5' /> : <Empty/>
            }
            {
              description ? 
              <p className=' my-4  text-base md:text-lg'>{description}</p> :
              isLoading ? <Skeleton width={400} count={3} /> : <Empty/>
            }
              
              <div className='mt-10'>
            <h4 className='mx-4 text-lg font-semibold mb-1'>بحث سريع</h4>
            <form onSubmit={handleSearch} className='mt-4 shadow-md  p-4 bg-white rounded-2xl '>
              <div className='mb-4 grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center md:divide md:divide-x-2 rtl:md:divide-x-reverse' >
                <div className='flex col-span-3 md:col-span-1 flex-col'>
                  <p className='text-start mb-2 font-medium'>السعر</p>
                  <div className='flex items-center gap-2'>
                    <Slider
                      range
                      className='w-full'
                      onChange={onChange}
                      defaultValue={[1000 , 3000]}
                      max={parseFloat(max)}
                      min={parseFloat(min)}
                      trackStyle={[{ backgroundColor: '#4F46E5' }]}
                      handleStyle={[
                        { borderColor: '#4F46E5', backgroundColor: 'white' },
                        { borderColor: '#4F46E5', backgroundColor: 'white' }
                      ]}
                      railStyle={{ backgroundColor: '#737373' }}
                    />
                  </div>
                </div>
                <div className='flex  flex-col ps-4'>
                  <p className='text-start mb-2 font-medium'>الضيوف</p>
                <input 
                  type='number' 
                  className='w-full border-none outline-none py-2 px-1 ' 
                  placeholder='no of guests' 
                  min={1}
                  value={guests}
                  onChange={(e) => setGuests(+e.target.value)} />

                </div>
                <div className='flex  flex-col ps-4'>
                  <p className='text-start mb-2 font-medium'>النوع</p>
                  <Select defaultValue="" onChange={(value) => setType(value)}>
                    <Option value="" disabled>نوع الغرفة</Option>
                    <Option value="room">غرفة</Option>
                    <Option value="suite">جناح</Option>
                    <Option value="poo_view">pool view</Option>
                  </Select>
                </div>
              </div>

                <button className='w-full btn btn-primary'>

                  بحث
                </button>
            </form>
          </div>
            </div>
            <div className=' h-full order-1 md:order-2 mb-8 md:mb-0 mt-6 md:mt-0'>
              <div className='grid grid-cols-2 gap-4 md:gap-6 h-full '>
                  <div className='grid grid-rows-3 gap-4 md:gap-6 mb-8'>
                  {
                    title ? 
                     <>
                     <img src={heroData?.icon[1].url} className='w-full h-full object-cover row-span-1 rounded-2xl' />
                     <img src={heroData?.icon[2].url} className='w-full h-full object-cover row-span-2 rounded-2xl' />
                     </>:
                    isLoading ? <>
                    <Skeleton count={1}  className='w-full h-full object-cover row-span-1 rounded-2xl' />
                    <Skeleton count={1}   className='w-full h-full object-cover row-span-2 rounded-2xl' />
                    </> : <Empty/>
                  }
                    
                    
                  </div>
                  {
                    title ? 
                     <>
                     <img src={heroData?.icon[0].url} className='w-full h-full object-cover mt-10 rounded-2xl' />
                     </>:
                    isLoading ? <Skeleton count={1} height={400} className='w-full h-full object-cover mt-10 rounded-2xl' /> : <Empty/>
                  }
                  
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default memo(Hero);
