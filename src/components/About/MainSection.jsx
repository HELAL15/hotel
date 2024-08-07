import React, { memo } from 'react'
import useFetch from '../../hooks/useFetch'
import Container from '../../helpers/Container'
import StyledAnim from '../../components/StyledAnim'
import Skeleton  from 'react-loading-skeleton'
import {motion} from 'framer-motion'


const MainSection = () => {

  const {data , isLoading} = useFetch("/about-section")
  const about = data?.data || {}


  return (
    <>
      <section className='mt-10 relative z-10 group'>
        <StyledAnim/>
        <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10'>
          <div className='flex flex-col gap-4 md:pe-28'>
          {
            isLoading ? <>
              <Skeleton count={1} width={150} height={30} />
              <Skeleton count={2} height={30} />
            </> :
            <>
              <motion.h2 
                animate={{
                  scale: [1, 1.05, 1],
                  transition: {duration: 1}
                }}
                className='text-xl md:text-2xl font-semibold mb-1 md:mb-2'>{about.title}</motion.h2>
              <p className=' leading-8'>{about.description}</p>
            </>
          }
          </div>
          <div className='aspect-[3/2] rounded-[30px] object-cover group-hover:after:opacity-0 after:duration-300 overflow-hidden relative after:absolute after:bg-slate-600/30 after:top-0 after:left-0 after:w-full after:h-full'>
            {
              isLoading ? <Skeleton className='w-full h-full' /> : 
            <img src={about.icon} alt={about.title} className=' w-full h-full duration-300 group-hover:scale-105' />
            }
          </div>
        </div>
        </Container>
      </section>
    </>
  )
}

export default memo(MainSection)
