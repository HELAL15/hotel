import React, { memo } from 'react'
import MainSection from '../components/About/MainSection'
import Newsletter from '../components/Newsletter'
import Comforts from '../components/About/Comforts'
import AboutPolicies from '../components/About/AboutPolicies'
import Features from '../components/About/Features'


const About = () => {
  return (
    <>
      <MainSection/>
      <Features/>
      <Comforts/>
      <AboutPolicies/>
      <Newsletter/>
    </>
  )
}

export default memo(About)
