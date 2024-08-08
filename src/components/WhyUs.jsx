import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import whyUs from '../img/BecomeAnAuthorImg.webp'
import Container from '../helpers/Container'
import Sorting from '../helpers/Sorting'
import { twMerge } from 'tailwind-merge'
import StyledAnim from './StyledAnim'
import { FaArrowRightLong } from 'react-icons/fa6'
import useFetch from '../hooks/useFetch'
import { useTranslation } from 'react-i18next'
import { Empty } from 'antd'
import Skeleton from 'react-loading-skeleton'

const WhyUs = () => {

  const {data , isLoading } = useFetch("/about-choose-us")
 
  const {t} = useTranslation()

  return (
    <>
      <section className=''>
        <Container sx="relative overflow-hidden">
          {/* <StyledAnim/> */}
          <div className={twMerge('relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 place-items-center bg-primary/10 py-7 px-4 md:px-20 rounded-[30px]')}>
            {
              data?.data  ?<>
              <div className='flex flex-col gap-3'>
                <h3 className=' text-xl md:text-2xl mb-1 md:mb-2 font-semibold'>{data?.data.title}</h3>
                <p className='leading-7'>{data?.data.description}</p>
                  <Link to="/about" className='btn btn-primary w-fit group flex items-center gap-2'>
                    <span>{t("more")}</span>
                    <FaArrowRightLong className='rtl:-scale-100' />
                  </Link>
              </div>
              <img src={data?.data.icon} alt={data?.data.title} />
              </> : isLoading ? <>
              <div className=''>
                <Skeleton width={150} />
                <Skeleton count={4} />
                <Skeleton width={150} />
              </div>
                <Skeleton className='rounded-xl p-48' />
              </> : <Empty className='col-span-4' />
            }
          </div>
        </Container>
      </section>
    </>
  )
}
export default memo(WhyUs)
