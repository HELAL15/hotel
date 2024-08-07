import React, { memo, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import WhyUs from '../components/WhyUs'
import Newsletter from '../components/Newsletter'
import Container from '../helpers/Container'
import PlaceCard from '../components/PlaceCard'
import Hero from '../components/home/Hero'
import SecTitle from '../components/SecTitle'
import OurFeatures from '../components/OurFeatures'
import HowItWork from '../components/HowItWork'
import Seo from '../helpers/Seo'
import Suggestion from '../components/home/Suggestion'
import FeaturedPlaces from '../components/home/FeaturedPlaces'
import ExplorePlaces from '../components/home/ExplorePlaces'
import TopRated from '../components/home/TopRated'
import Testimonials from '../components/home/Testimonials'
import Facts from '../components/home/Facts'



const Home = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  }

  const pageTransition = {
    type: "spring",
    duration: 0.5,
  }



  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >

      <Seo title="home" description="Hilton hotel is placed to host you at your second home" />

      <Hero/>

      <Suggestion />
      <OurFeatures />
      <WhyUs />
      <FeaturedPlaces />


      <TopRated/>




      <HowItWork />
 
      
      <Testimonials/>


      <Facts/>


      <Newsletter />
    </motion.div>
  )
}

export default memo(Home)
