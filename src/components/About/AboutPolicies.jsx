import React, { memo } from 'react'
import Container from '../../helpers/Container'
import useFetch from '../../hooks/useFetch'
import Card from './Card'
import Skeleton from 'react-loading-skeleton'
import { Empty } from 'antd'

const AboutPolicies = () => {

  const {data , isLoading} = useFetch("/about-policys")
  const AboutPolicies = data?.data || []

  return (
    <>
      <section className=''>
        <Container>
          <h2 className='text-3xl px-4 pb-8 font-bold text-center lg:text-left rtl:lg:text-right'>Our Policies</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch'>
            { 
              isLoading ? 
              <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 col-span-full '>
              <Skeleton className='py-20 rounded-[30px]' />
              <Skeleton className='py-20 rounded-[30px]' />
              <Skeleton className='py-20 rounded-[30px]' />
              <Skeleton className='py-20 rounded-[30px]' />
              </div> :
              AboutPolicies.length > 0 ? 
              AboutPolicies.map((policy) => (
                <Card content={policy} key={policy.id}/>
              )) : 
              <div className='text-center col-span-full'><Empty/></div>
            }
          </div>
        </Container>
      </section>
    </>
  )
}

export default memo(AboutPolicies)
