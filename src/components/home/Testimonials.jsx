import React from 'react'
import useFetch from '../../hooks/useFetch'
import PlaceCard from '../PlaceCard';
import { Swiper, SwiperSlide } from 'swiper/react'
import SecTitle from '../SecTitle';
import Container from '../../helpers/Container';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import quote from '../../img/quote.svg'
import { Empty } from 'antd';
import Skeleton from 'react-loading-skeleton';

const Testimonials = () => {

  const lang = useSelector((state) => state.lang.value);
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const {data , isLoading} = useFetch("/testimonials")
  const testimonials = data?.data || []

  return (
    <>
      
      <section className='bg-orange-50 testimonials ' >
        <Container>
          <div className=' relative  py-8'>
            <SecTitle 
              head="testimonials.head"
              body="testimonials.body"
              sx='text-center flex flex-col items-center justify-center'
            />

          <img src={quote} alt='qoute'  className='  absolute z-0 top-1/2 inset-x-0 md:inset-x-[12rem] inset-y-1/2 rounded-full w-[50px] h-[50px] rtl:rotate-180 '/>

          <img src={quote} alt='qoute'  className='absolute  z-0 top-1/2 ltr:right-0 rtl:left-0 md:ltr:right-[12rem] md:rtl:left-[12rem] inset-y-1/2 rounded-full w-[50px] h-[50px] ltr:rotate-180 '/>


            <Swiper
              className='h-full w-full md:w-1/2 m-auto relative z-10'
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              dir={dir}
              loop
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
            >  
              
              {testimonials?.length > 0 ?
                testimonials?.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className='pt-5 pb-20 text-center'>
                    <p className='text-xl font-normal mb-2'>{testimonial.text}</p>
                    <h3 className='text-xl font-bold' >{testimonial.title}</h3>
                </SwiperSlide> 
              )) : isLoading ? <div className='pt-5 pb-20 flex flex-col items-center justify-center'>
                <Skeleton width={500} count={2} />
                <Skeleton width={200} />
              </div> : <Empty/>
              }
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Testimonials
