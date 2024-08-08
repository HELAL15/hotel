import React, { memo } from 'react'
import Container from '../../helpers/Container'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { useSelector } from 'react-redux'
import SecTitle from '../SecTitle'
import Skeleton from 'react-loading-skeleton'
import { Empty } from 'antd'
import { useTranslation } from 'react-i18next'
import { FaStar } from 'react-icons/fa6'

const TopRated = () => {

const {data , isLoading } = useFetch(`/rooms?top_rated=1`)
const tops = data?.data || {}

const setting = useSelector((state)=>state.setting.value)

const {t} = useTranslation()

  return (
    <>

      <section className=''>
        <Container>
        <SecTitle 
              head="rated.head"
              body="rated.body"
            />
          <div className='grid  md:grid-cols-3  gap-6 items-stretch'>
          {
              tops?.length > 0 ?
              <>
                <Link to={`/rooms/${tops[0]?.id}`} className='rounded-2xl overflow-hidden relative group max-h-[450px]'>
                {
                  tops[0]?.images[0]?.url ? (
                    <img className="object-cover w-full h-full group-hover:scale-110 duration-300" src={tops[0]?.images[0]?.url} />
                  ) : (
                    <img className="object-contain w-full h-full group-hover:scale-110 duration-300" src={setting?.data?.logo} />
                  )
                }
                  <div className='absolute inset-x-0 bottom-0 p-4 z-10 bg-gradient-to-t from-black/60 to-transparent '>
                    <h4 className='text-white text-lg md:text-xl font-bold'>{tops[0]?.title}</h4>
                    <p className='text-white/90 text-base font-normal flex items-center gap-1 mt-1'>{tops[0]?.avg_review} <i className='text-yellow-400'><FaStar /></i></p>
                  </div>
                </Link>
              <div className='grid grid-rows-2 gap-6 max-h-[450px]'>
                <Link to={`/rooms/${tops[1]?.id}`} className='rounded-2xl overflow-hidden relative group '>
                {
                  tops[1]?.images[0]?.url ? (
                    <img className="object-cover w-full h-full group-hover:scale-110 duration-300" src={tops[1]?.images[0]?.url} />
                  ) : (
                    <img className="object-contain w-full h-full group-hover:scale-110 duration-300" src={setting?.data?.logo} />
                  )
                }
                  <div className='absolute inset-x-0 bottom-0 p-4 z-10 bg-gradient-to-t from-black/60 to-transparent '>
                    <h4 className='text-white text-lg md:text-xl font-bold'>{tops[1]?.title}</h4>
                    <p className='text-white/90 text-base font-normal flex items-center gap-1 mt-1'>{tops[1]?.avg_review} <i className='text-yellow-400'><FaStar /></i></p>
                  </div>
                </Link>
                <Link to={`/rooms/${tops[2]?.id}`} className='rounded-2xl overflow-hidden relative group '>
                {
                  tops[2]?.images[0]?.url ? (
                    <img className="object-cover w-full h-full group-hover:scale-110 duration-300" src={tops[2]?.images[0]?.url} />
                  ) : (
                    <img className="object-contain w-full h-full group-hover:scale-110 duration-300" src={setting?.data?.logo} />
                  )
                }
                  <div className='absolute inset-x-0 bottom-0 p-4 z-10 bg-gradient-to-t from-black/60 to-transparent '>
                    <h4 className='text-white text-lg md:text-xl font-bold'>{tops[2]?.title}</h4>
                    <p className='text-white/90 text-base font-normal flex items-center gap-1 mt-1'>{tops[2]?.avg_review} <i className='text-yellow-400'><FaStar /></i></p>
                  </div>
                </Link>
              </div>
              <Link to={`/rooms/${tops[3]?.id}`} className='rounded-2xl overflow-hidden relative group max-h-[450px]'>
                {
                  tops[3]?.images[0]?.url ? (
                    <img className="object-cover w-full h-full group-hover:scale-110 duration-300" src={tops[3]?.images[0]?.url} />
                  ) : (
                    <img className="object-contain w-full h-full group-hover:scale-110 duration-300" src={setting?.data?.logo} />
                  )
                }
                
                <div className='absolute inset-x-0 bottom-0 p-4 z-10 bg-gradient-to-t from-black/60 to-transparent '>
                  <h4 className='text-white text-lg md:text-xl font-bold'>{tops[3]?.title}</h4>
                  <p className='text-white/90 text-base font-normal flex items-center gap-1 mt-1'>{tops[3]?.avg_review} <i className='text-yellow-400'><FaStar /></i></p>
                </div>
              </Link>
            </> :
              isLoading?
              <>
              <Skeleton height={450} />
              <div className='max-h-[450px] grid grid-rows-2 gap-6'>
                <Skeleton height={211} />
                <Skeleton height={211} />
              </div>
              <Skeleton height={450} />
            </> :
              <Empty className='col-span-4 my-8'/>
            }
          </div>
        </Container>
      </section>
    </>
  )
}

export default memo(TopRated)
