import React, { memo } from 'react'
import MainSection from '../components/About/MainSection'
import Newsletter from '../components/Newsletter'
import Comforts from '../components/About/Comforts'
import AboutPolicies from '../components/About/AboutPolicies'
import Features from '../components/About/Features'
import HowItWork from '../components/HowItWork'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import useFetch from '../hooks/useFetch'




const About = () => {

  const {t} = useTranslation()

  const {data:policies , isLoading:policiesLoading} = useFetch("/about-policys")
  const {data:comfort , isLoading:comfortLoading} = useFetch("/about-comforts")
  const { data:features, isLoading:featuresLoading } = useFetch("/about-features");


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
      <Features  data={features} isLoading={featuresLoading} head={t("about.features")} />
      <HowItWork/>
      <Comforts  data={comfort} isLoading={comfortLoading} head={t("about.comfort")}/>
      <AboutPolicies data={policies} isLoading={policiesLoading} head={t("about.policies")}  />
      <Newsletter/>
    </motion.div>
  )
}

export default memo(About)
