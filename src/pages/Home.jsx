import React, { memo , Suspense, lazy  } from 'react'
import WhyUs from '../components/WhyUs'
import Newsletter from '../components/Newsletter'
import Container from '../helpers/Container'
import PlaceCard from '../components/PlaceCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Hero from '../components/home/Hero'
import SecTitle from '../components/SecTitle'
import OurFeatures from '../components/OurFeatures'
import HowItWork from '../components/HowItWork'
import Seo from '../helpers/Seo'
import Suggestion from '../components/home/Suggestion'
import FeaturedPlaces from '../components/home/FeaturedPlaces'
import ExplorePlaces from '../components/home/ExplorePlaces'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SomeComponent = lazy(() => import('../components/home/Hero'));


const Home = () => {



const pageVariants = {
    initial: {
      opacity: 0,
      // x: "-100vw"
    },
    in: {
      opacity: 1,
      // x: 0
    },
    out: {
      opacity: 0,
      // x: "100vw"
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

    <Seo title="home" description="hilton hotel is placed to host you at your seconde home"  />

    <Suspense fallback={<div>helal</div>}>
      <SomeComponent />
    </Suspense>

{/* <Hero/> */}

<Suggestion/>

    <OurFeatures/>

    <WhyUs/>

    <FeaturedPlaces/>

    <HowItWork/>

{/* // popular places will remove */}
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


    <ExplorePlaces/>

{/* 
    <div className='fixed z-50 bottom-0 bg-white border-t border-gray-300 py-4 px-4 w-full'>
      <div className='flex items-center justify-evenly w-full'>
        <Link to={1}>test</Link>
        <Link to={1}>test</Link>
        <Link to={1}>test</Link>
        <Link to={1}>test</Link>
      </div>
    </div> */}


        <Newsletter/>
        
    </motion.div>
  )
}

export default memo(Home)
