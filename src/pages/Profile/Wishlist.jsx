import React, { memo, useEffect, useState } from 'react'
import Seo from '../../helpers/Seo'
import Container from '../../helpers/Container'
import SecTitle from '../../components/SecTitle'
import MainCard from '../../components/MainCard'
import useFetch from '../../hooks/useFetch'
import { Empty, Skeleton } from 'antd'
import { useLocation } from 'react-router'
import {motion} from "framer-motion"

const Wishlist = () => {
  const [removed , setRemoved] = useState(false)
  const {pathname} = useLocation()
  const {data , isLoading , refetch} = useFetch('/user/rooms/wishlist')
  const rooms = data?.data || []
  useEffect(()=>{
    if(pathname === "/wishlist"){
      refetch()
    }
  },[removed])

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
      <Seo title="wishlist"  />
      <section className=''>
      <Container>
      <SecTitle 
          head="wishlist"
          />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
            {
              rooms?.length > 0 ?
                rooms.map((room) => (
                  <MainCard key={room.id} room={room} setRemoved={setRemoved} />
                )) :
              isLoading?
              <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-full col-span-4 my-8 '>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div> :
              <Empty className='col-span-4 my-8'/>
            }
        </div>
      </Container>
    </section>
    </motion.div>
  )
}

export default memo(Wishlist)
