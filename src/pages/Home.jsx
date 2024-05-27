import React, { memo } from 'react'
import WhyUs from '../components/WhyUs'
import Newsletter from '../components/Newsletter'
import MainCard from '../components/MainCard'
import Sorting from '../helpers/Sorting'
import Container from '../helpers/Container'
import PlaceCard from '../components/PlaceCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Hero from '../components/Hero'
import SecTitle from '../components/SecTitle'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import OurFeatures from '../components/OurFeatures'
import HowItWork from '../components/HowItWork'
import ExplorePlace from '../components/ExplorePlace'
import Seo from '../helpers/Seo'


const Home = () => {
  return (
    <>

    <Seo title="home"  />
<Hero/>

    <section className=''>
      <Container>
        <SecTitle 
          head="Suggestions for discovery"
          body="Popular places to recommends for you"
          />
                <Swiper
                className='h-full w-full'
                modules={[Navigation]}
                // spaceBetween={50}
                // slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                  // when window width is <= 625px
                  625: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when window width is <= 768px
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  // when window width is <= 1024px
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  // when window width is <= 1024px
                  1444: {
                    slidesPerView: 5,
                    spaceBetween: 35,
                  },
                }}
              >
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
          </Swiper>
      </Container>
    </section>

    <OurFeatures/>

    <WhyUs/>

    <section className=''>
      <Container>
      <SecTitle 
          head="Featured places to stay"
          body="Popular places to stay that Chisfis recommends for you"
          />
        <Sorting sx=''>
          <MainCard/>
          <MainCard sale/>
          <MainCard/>
          <MainCard/>
          <MainCard/>
          <MainCard sale/>
          <MainCard/>
          <MainCard/>
        </Sorting>
          <div className='grid place-items-center mt-8'>
            <Link to="/services" className='btn btn-primary flex items-center gap-3 group'> <span>view all</span> <FaArrowRightLong className='group-hover:animate-shake' /></Link>
          </div>
      </Container>
    </section>

    <HowItWork/>

    <section className=''>
      <Container>
      <div className='bg-orange-50 rounded-[30px] py-8 px-8'>
          <SecTitle 
            head="popular places"
            body="Popular places to recommends for you"
            />
                  <Swiper
                  className='h-full w-full'
                  modules={[Navigation]}
                  // spaceBetween={50}
                  // slidesPerView={5}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  breakpoints={{
                    // when window width is <= 625px
                    625: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    // when window width is <= 768px
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    // when window width is <= 1024px
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 25,
                    },
                    // when window width is <= 1024px
                    1444: {
                      slidesPerView: 4,
                      spaceBetween: 35,
                    },
                  }}
                >
                  <SwiperSlide>
                    <PlaceCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <PlaceCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <PlaceCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <PlaceCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <PlaceCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <PlaceCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <PlaceCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <PlaceCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <PlaceCard/>
                  </SwiperSlide>
            </Swiper>
      </div>
      </Container>
    </section>


    <section>
      <Container>
        <div className='grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'>
          <ExplorePlace/>
          <ExplorePlace/>
          <ExplorePlace/>
          <ExplorePlace/>
          <ExplorePlace/>
          <ExplorePlace/>
          <ExplorePlace/>
          <ExplorePlace/>
        </div>
      </Container>
    </section>


        <Newsletter/>
        
    </>
  )
}

export default memo(Home)
