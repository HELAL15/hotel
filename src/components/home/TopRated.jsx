import React, { memo } from 'react'
import Container from '../../helpers/Container'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const TopRated = () => {

const {data} = useFetch(`/rooms?top_rated=1`)


const tops = data?.data || {}

  return (
    <>
      <section className=''>
        <Container>
          <div className='grid  md:grid-cols-3  gap-6 items-stretch'>
            {/* {
              tops?.map((top)=>{
                return (
                  <Link to={`/rooms/${top.id}`} className={`
                    rounded-2xl overflow-hidden relative group
                    `}>
                    <img className='object-cover w-full h-full group-hover:scale-110 duration-300' src={top.images[0]?.url}  />
                    <div className='absolute inset-x-0 bottom-0 p-4 z-10 bg-gradient-to-t from-black/60 to-transparent '>
                      <h4 className='text-white text-2xl font-bold'>{top.title}</h4>
                      <p className='text-white/90 text-base font-normal'>{top.avg_review} rate</p>
                    </div>
                  </Link>
                )
              })
            } */}
              <Link to={`/rooms/${tops[0]?.id}`} className='rounded-2xl overflow-hidden relative group'>
                <img className='object-cover w-full h-full group-hover:scale-110 duration-300  ' src={tops[0]?.images[0]?.url}  />
                <div className='absolute inset-x-0 bottom-0 p-4 z-10 bg-gradient-to-t from-black/60 to-transparent '>
                  <h4 className='text-white text-2xl font-bold'>{tops[0]?.title}</h4>
                  <p className='text-white/90 text-base font-normal'>{tops[0]?.avg_review} rate</p>
                </div>
              </Link>
            <div className='grid grid-rows-2 gap-6 '>
              <Link to={`/rooms/${tops[1]?.id}`} className='rounded-2xl overflow-hidden relative group'>
                <img className='object-cover w-full h-full group-hover:scale-110 duration-300 ' src={tops[1]?.images[0]?.url}  />
                <div className='absolute inset-x-0 bottom-0 p-4 z-10 bg-gradient-to-t from-black/60 to-transparent '>
                  <h4 className='text-white text-2xl font-bold'>{tops[1]?.title}</h4>
                  <p className='text-white/90 text-base font-normal'>{tops[1]?.avg_review} rate</p>
                </div>
              </Link>
              <Link to={`/rooms/${tops[2]?.id}`} className='rounded-2xl overflow-hidden relative group'>
                <img className='object-cover w-full h-full group-hover:scale-110 duration-300 ' src={tops[2]?.images[0]?.url}  />
                <div className='absolute inset-x-0 bottom-0 p-4 z-10 bg-gradient-to-t from-black/60 to-transparent '>
                  <h4 className='text-white text-2xl font-bold'>{tops[2]?.title}</h4>
                  <p className='text-white/90 text-base font-normal'>{tops[2]?.avg_review} rate</p>
                </div>
              </Link>
            </div>
            <Link to={`/rooms/${tops[3]?.id}`} className='rounded-2xl overflow-hidden relative group'>
              <img className='object-cover w-full h-full group-hover:scale-110 duration-300 ' src={tops[3]?.images[0]?.url}  />
              <div className='absolute inset-x-0 bottom-0 p-4 z-10 bg-gradient-to-t from-black/60 to-transparent '>
                <h4 className='text-white text-2xl font-bold'>{tops[3]?.title}</h4>
                <p className='text-white/90 text-base font-normal'>{tops[3]?.avg_review} rate</p>
              </div>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

export default memo(TopRated)
