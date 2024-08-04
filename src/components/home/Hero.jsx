import React, { memo, useState } from 'react';
import Container from '../../helpers/Container';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';
import StyledAnim from '../StyledAnim';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Select, Slider } from 'antd';
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
    max_no_guests:maxGuest,
    max_price_per_day:max,
    min_price_per_day:min
  } = setting?.data || {}


  const defaultPrice = [min, max]
  const [prices, setPrices] = useState([min, max]);
  const [guests, setGuests] = useState(1);
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
              <h1 className=' text-xl md:text-3xl leading-8 md:leading-[3.5rem] text-black capitalize font-bold  '>{title}</h1>
              <p className=' my-4  text-base md:text-lg'>{description}</p>
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
                      defaultValue={[900 , 2500]}
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
                  {/* <Select style={{border: "none"}} defaultValue="1" onChange={(value) => setGuests(value)}>
                  {[...Array(maxGuest)].map((_, index) => (
                  <Option value={index + 1} key={index}>
                    {index + 1} {index + 1 === 1 ? "guest" : "guests"}
                  </Option>
                ))}
                  </Select> */}
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
              {/* <img src='https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right.4859d624.png&w=1080&q=75' alt='' /> */}
              {/* <Swiper
                className='h-full w-full aspect-video rounded-3xl shadow-2xl border-[.8rem] border-white/40 overflow-hidden'
                modules={[Pagination, Autoplay]}
                dir={dir}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop
                autoplay={{
                  delay: 4000,
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
              </Swiper> */}
              <div className='grid grid-cols-2 gap-4 md:gap-6 h-full '>
                  <div className='grid grid-rows-3 gap-4 md:gap-6 mb-8'>
                    <img src={heroData?.icon[1].url} className='w-full h-full object-cover row-span-1 rounded-2xl' />
                    <img src={heroData?.icon[2].url} className='w-full h-full object-cover row-span-2 rounded-2xl' />
                  </div>
                  <img src={heroData?.icon[0].url} className='w-full h-full object-cover mt-10 rounded-2xl' />
                {/* {
                  heroData?.icon.map((icon) => (
                    <div className='w-full h-full relative'>
                      <span className='overlay absolute top-0 left-0 bg-black/20 w-full h-full'></span>
                    </div>
                  ))
                } */}
              </div>
              {/* <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        <img src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1668491195456-9341d9cf3977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aGl0ZXxlbnwwfDF8fHwxNzIxODIyMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1475518112798-86ae358241eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1503777119540-ce54b422baff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjYXQlMjB3aGl0ZXxlbnwwfDF8fHwxNzIxODIyMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1502083896352-259ab9e342d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1708791793972-cf97ef3c01c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aGl0ZXxlbnwwfDB8fHwxNzIxODIyMjkwfDA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1516470544373-df3edeb89d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjYXQlMjB3aGl0ZXxlbnwwfDB8fHwxNzIxODIyMjkwfDA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1517451330947-7809dead78d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
    </div> */}
              {/* <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img src="https://placekitten.com/g/200/300" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://placekeanu.com/200/300" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://placekeanu.com/684/350/" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://placekeanu.com/250/350/y" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://placekitten.com/g/200/300" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://placekeanu.com/684/350/y" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://placebear.com/684/350" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default memo(Hero);
