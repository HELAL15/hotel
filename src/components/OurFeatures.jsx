import React, { memo } from 'react'
import Container from '../helpers/Container'
import img from '../img/our-features.webp'
import useFetch from '../hooks/useFetch'
import { Empty } from 'antd'
import Skeleton from 'react-loading-skeleton'
import { useTranslation } from 'react-i18next'

const OurFeatures = () => {


  const {data , isLoading} = useFetch("/benefits")
  const benefits = data?.data || {}

  const {t} = useTranslation()

  return (
    <>
      
      <section>
        <Container>
          <div className='relative flex flex-col items-center lg:flex-row lg:py-14 gap-6 md:gap-8'>
            <div className='flex-grow'>
              <img src={img} alt='features'/>
            </div>
            <div className="max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 lg:pl-16">
              <span className="uppercase text-sm text-neutral-500 tracking-widest">{t("benefits.head")}</span>
              <h2 className="font-semibold text-4xl mt-5">{t("benefits.body")}</h2>
              <ul className="space-y-10 mt-16">
                {
                  benefits?.length > 0 ?
                  benefits.map((benefit , index)=>(
                    <li key={index} className="space-y-4">
                      <span 
                      className={`inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative ${index === 0 ? 'text-blue-800 ' : index === 1 ? "text-green-800 " : "text-red-800 " } ${index === 0 ? 'bg-blue-100' : index === 1 ? "bg-green-100" : "bg-red-100" }`} >
                      {benefit?.tag}</span>
                      <h4 className="text-lg  font-semibold">{benefit?.text}</h4>
                      <p className="block mt-5">{benefit?.title}</p>
                    </li>
                  )) : isLoading ?
                  [...Array(3)].map((_, index) => (
                  <div className='flex flex-col gap-2' key={index} >
                    <Skeleton width={80} />
                    <Skeleton width={300} />
                    <Skeleton width={300} />
                  </div>
                ))
                   : 
                  <Empty/>
                }

              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default memo(OurFeatures)
