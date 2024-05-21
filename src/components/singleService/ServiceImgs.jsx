import React, { memo } from 'react'
import Container from '../../helpers/Container'
import service1 from '../../img/service1.webp'
import service2 from '../../img/service2.webp'
import service3 from '../../img/service3.webp'
import service4 from '../../img/service4.webp'
import service5 from '../../img/service5.webp'

const ServiceImgs = () => {
  return (
    <>
            <section className='images pt-5'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='relative rounded-md overflow-hidden'>
              <img loading='lazy' src={service1} alt='service' className='w-full h-full object-cover rounded-lg' />
            </div>
            <div className='relative grid grid-cols-2 gap-2'>
              <div className='rounded-md overflow-hidden'>
                <img loading='lazy' src={service2} alt='service' className='w-full h-full object-cover rounded-lg' />
              </div>
              <div className='rounded-md overflow-hidden'>
                <img loading='lazy' src={service3} alt='service' className='w-full h-full object-cover rounded-lg' />
              </div>
              <div className='rounded-md overflow-hidden'>
                <img loading='lazy' src={service4} alt='service' className='w-full h-full object-cover rounded-lg' />
              </div>
              <div className='rounded-md overflow-hidden'>
                <img loading='lazy' src={service5} alt='service' className='w-full h-full object-cover rounded-lg' />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default memo(ServiceImgs)
