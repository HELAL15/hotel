import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import whyUs from '../img/BecomeAnAuthorImg.webp'
import Container from '../helpers/Container'
import Sorting from '../helpers/Sorting'
import { twMerge } from 'tailwind-merge'
import StyledAnim from './StyledAnim'
import { FaArrowRightLong } from 'react-icons/fa6'

const WhyUs = () => {
  return (
    <>
      <section className=''>
        <Container sx="relative overflow-hidden">
          {/* <StyledAnim/> */}
          <div className={twMerge('relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 place-items-center bg-primary/10 py-7 px-4 md:px-20 rounded-[30px]')}>
            <div className='flex flex-col gap-3'>
              <h3 className='text-4xl font-semibold'>Why did you choose us?</h3>
              <p className='text-neutral-500'>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation,
                resort villas, hotels, private houses, apartments... becomes fast, convenient and easy.</p>
                <Link to="/about" className='btn btn-primary w-fit group flex items-center gap-2'> <span>know more</span> <FaArrowRightLong className='group-hover:animate-shake' /></Link>
            </div>
            <img src={whyUs} alt="become an author" />
          </div>
        </Container>
      </section>
    </>
  )
}

export default memo(WhyUs)
