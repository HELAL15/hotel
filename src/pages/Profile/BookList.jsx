import React, { memo, useEffect, useState } from 'react'
import Seo from '../../helpers/Seo'
import Container from '../../helpers/Container'
import SecTitle from '../../components/SecTitle'
import MainCard from '../../components/MainCard'
import useFetch from '../../hooks/useFetch'
import { Empty, Pagination } from 'antd'
import { useLocation } from 'react-router'
import {motion} from "framer-motion"
import Skeleton from 'react-loading-skeleton'
import Sorting from '../../helpers/Sorting'

const BookList = () => {

  const [current, setCurrent] = useState(1);
  const {pathname} = useLocation()
  const {data , isLoading , refetch} = useFetch(`/user/rooms/reservations?page=${current}` , [ current])
  const rooms = data?.data.data || []
  const totalRooms = data?.data.meta.total || 0;

  const handlePaginationChange = (page) => {
    setCurrent(page);
  };



const pageVariants = {
    initial: {
      opacity: 0,
      // x: "-100vw"
    },
    in: {
      opacity: 1,
      // x: 0
    },
    out: {
      opacity: 0,
      // x: "100vw"
    }
  };
  
  const pageTransition = {
    type: "spring",
    duration: 0.5
  };


  return (
    <motion.div
      initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    >
      <Seo title="reservations"  />
      <section className=''>

      <SecTitle 
          head="profile.booklist.link"
          />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8'>
            {
              rooms?.length > 0 ?
              rooms.map((room) => (
                  <MainCard key={room.id} room={room}  />
                )) :
              isLoading?
              <div className='grid gap-x-5 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-full col-span-4  '>
              {[...Array(8)].map((_, index) => (
                  <div key={index}>
                    <Skeleton height={200} />
                    <Skeleton width={100} />
                    <Skeleton count={2} />
                  </div>
                ))}
              </div> :
              <Empty className='col-span-4 my-8'/>
            }
        </div>
        <Pagination
            className='mt-10'
            current={current}
            total={totalRooms}
            pageSize={data?.data.meta.per_page}
            onChange={handlePaginationChange}
          />

    </section>
    </motion.div>
  )
}

export default memo(BookList)
