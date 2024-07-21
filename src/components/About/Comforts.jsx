import React, { memo } from 'react'
import Container from '../../helpers/Container'
import useFetch from '../../hooks/useFetch'
import Card from './Card'
import Skeleton from 'react-loading-skeleton'
import { Empty } from 'antd'

const Comforts = () => {

  const {data , isLoading} = useFetch("/about-comforts")
  const comforts = data?.data || []

  return (
    <>
      <section className='relative z-10'>
        <Container>
          <h2 className='text-3xl px-4 pb-8 font-bold text-center lg:text-left rtl:lg:text-right'>Our Comforts</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch'>
            { 
              isLoading ? 
              <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 col-span-full '>
              <Skeleton className='py-20 rounded-[30px]' />
              <Skeleton className='py-20 rounded-[30px]' />
              <Skeleton className='py-20 rounded-[30px]' />
              <Skeleton className='py-20 rounded-[30px]' />
              </div> :
              comforts.length > 0 ? 
              comforts.map((comfort) => (
                <Card content={comfort} key={comfort.id}/>
              )) : 
              <div className='text-center col-span-full'><Empty/></div>
            }
          </div>
        </Container>
      </section>
    </>
  )
}

export default memo(Comforts)
