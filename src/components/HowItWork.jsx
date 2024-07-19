import React, { memo, useEffect } from 'react'
import Container from '../helpers/Container'
import img from '../img/HIW1.webp'
import img2 from '../img/HIW2.webp'
import img3 from '../img/HIW3.webp'
import dashed from '../img/dashed.svg'
import { twMerge } from 'tailwind-merge'
import useFetch from '../hooks/useFetch'
import { useLngContext } from '../context/ChangeLng'

const HowItWork = () => {
  const {data , refetch } = useFetch("/about-relax")
  console.log(data);
  const relaxes = data?.data || []

  const {lang} = useLngContext()

useEffect(()=>{
  refetch()
},[lang])


  return (
    <>
      <section>
        <Container>
          <div className={twMerge(`text-center mb-10`)}>
            <h2 className='text-2xl md:text-4xl font-semibold mb-1 md:mb-2'>How it work</h2>
            <p className='text-neutral-500 text-lg md:text-xl'>Keep calm & travel on</p>
          </div>
          <div className="mt-20 relative grid md:grid-cols-3 gap-20 items-stretch">
            <img src={dashed}  alt="" loading="lazy"  className="hidden md:block absolute inset-x-0 top-10"  />
            {
              relaxes.map((relax)=>{
                return (
                <div key={relax.id} className="relative flex flex-col items-center max-w-xs mx-auto">
                  <img alt={relax.title} loading="lazy" className="mb-8 max-w-[180px] mx-auto" src={relax.icon} />
                  <div className="text-center mt-auto ">
                    <h3 className="text-xl font-semibold ">{relax.title}</h3>
                    <p className="block mt-5 text-neutral-500 dark:text-neutral-400 flex-grow">{relax.description}</p>
                  </div>
                </div>
                )
            })
            }
        </div>
        </Container>
      </section>
    </>
  )
}

export default memo(HowItWork)
