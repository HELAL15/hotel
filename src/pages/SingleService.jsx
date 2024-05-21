import React from 'react'
import Container from '../helpers/Container'

import MainInfo from '../components/singleService/MainInfo'
import StayInfo from '../components/singleService/StayInfo'
import ThingsToKnow from '../components/singleService/ThingsToKnow'
import Reviews from '../components/singleService/Reviews'
import ServiceImgs from '../components/singleService/ServiceImgs'
import ServiceCard from '../components/singleService/ServiceCard'
import ServiceLocation from '../components/singleService/ServiceLocation'


const SingleService = () => {




  return (
    <>

    <ServiceImgs/>

      <section className='mt-5'>
        <Container>
          <div className='relative z-10 mt-11 flex flex-col lg:flex-row flex-wrap-reverse'>
            <div className='w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10 order-2 lg:order-1'>
              <MainInfo/>
              <StayInfo/>
              <ThingsToKnow/>
              <ServiceLocation/>
              <Reviews/>
            </div>
            <div className=' lg:block flex-grow mt-14 lg:mt-0 order-1'>
              <ServiceCard/>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default SingleService
