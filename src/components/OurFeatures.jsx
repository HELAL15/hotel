import React, { memo } from 'react'
import Container from '../helpers/Container'
import img from '../img/our-features.webp'

const OurFeatures = () => {
  return (
    <>
      <section>
        <Container>
          <div className='relative flex flex-col items-center lg:flex-row lg:py-14 gap-6 md:gap-8'>
            <div className='flex-grow'>
              <img src={img} alt='features'/>
            </div>
            <div className="max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 lg:pl-16">
              <span className="uppercase text-sm text-neutral-500 tracking-widest">BENnefits</span>
              <h2 className="font-semibold text-4xl mt-5">Happening cities </h2>
              <ul className="space-y-10 mt-16">
                <li className="space-y-4">
                  <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100">Advertising</span>
                  <span className="block text-xl text-black font-semibold">Cost-effective advertising</span>
                  <span className="block mt-5 text-neutral-500 dark:text-neutral-400">With a free listing, you can advertise your rental with no
                    upfront costs</span>
                </li>
                <li className="space-y-4">
                  <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-green-800 bg-green-100 relative">Exposure </span>
                  <span className="block text-xl font-semibold text-black">Reach millions with Chisfis</span>
                  <span className="block mt-5 text-neutral-500 dark:text-neutral-400">Millions of people are searching for unique places to stay around the world</span>
                </li>
                <li className="space-y-4">
                  <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-red-800 bg-red-100 relative">Secure</span>
                  <span className="block text-xl font-semibold text-black">Secure and simple</span>
                  <span className="block mt-5 text-neutral-500 dark:text-neutral-400">A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default memo(OurFeatures)
