import React, { memo } from 'react'
import Container from '../../helpers/Container'
import SecTitle from '../SecTitle'
import useFetch from '../../hooks/useFetch'
import { Empty } from 'antd'
import Skeleton from 'react-loading-skeleton'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'





const Fact = ({fact}) =>{
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1, 
  });
  return(
    <div className='bg-primary/10 px-6 py-8 rounded-2xl'>
      <h3 className='text-2xl font-bold' ref={ref} >
      {inView && (
        <CountUp start={0} end={fact.title} delay={0.5} duration={2} />
      )}
      </h3>
      <p className='text-lg text-gray-600 mt-2 font-medium'>
        {fact.text}
       </p>
    </div>
  )
}


const Facts = () => {


  const {data , isLoading} = useFetch("/counters")
  const facts = data?.data || []

  return (
    <>
      <section>
        <Container>
          <SecTitle
           head="fact.head"
            body="fact.body"
            />
            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
              {
                facts?.length > 0 ?
                facts?.map((fact) => (
                  <Fact key={fact.id} fact={fact} />
                )) : isLoading ? 
                  [...Array(3)].map((_,index)=>{
                    return(
                      <div key={index} className='bg-primary/10 px-6 py-8 rounded-2xl'>
                        <Skeleton width={200} height={40} />
                        <Skeleton count={2} />
                      </div>
                    )
                  })
                 : <Empty/>
              }
            </div>
        </Container>
      </section>
    </>
  )
}

export default memo(Facts)
