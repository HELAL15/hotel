import React, { memo } from 'react'
import MainSection from '../components/About/MainSection'
import Newsletter from '../components/Newsletter'
import Comforts from '../components/About/Comforts'
import AboutPolicies from '../components/About/AboutPolicies'
import Features from '../components/About/Features'
import HowItWork from '../components/HowItWork'
import { motion } from 'framer-motion'




const About = () => {


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
      <MainSection/>
      <Features/>
      <HowItWork/>
      <Comforts/>
      <AboutPolicies/>
      <Newsletter/>
    </motion.div>
  )
}

export default memo(About)
