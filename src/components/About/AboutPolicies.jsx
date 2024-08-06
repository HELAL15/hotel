import React, { memo } from 'react'
import Container from '../../helpers/Container'
import useFetch from '../../hooks/useFetch'
import Card from './Card'
import Skeleton from 'react-loading-skeleton'
import { Empty } from 'antd'
import { useTranslation } from 'react-i18next'

const AboutPolicies = ({data , isLoading , head}) => {

  const aboutPolicies = data?.data || []

  return (
    <>
      <section className=''>
        <Container>
          <h2 className='text-xl md:text-2xl px-4 pb-8 font-bold text-center lg:text-left rtl:lg:text-right'>{head}</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch'>
            { 
              isLoading ? 
              <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 col-span-full '>
              <Skeleton className='py-20 rounded-[30px]' />
              <Skeleton className='py-20 rounded-[30px]' />
              <Skeleton className='py-20 rounded-[30px]' />
              <Skeleton className='py-20 rounded-[30px]' />
              </div> :
              aboutPolicies.length > 0 ? 
              aboutPolicies.map((policy) => (
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
