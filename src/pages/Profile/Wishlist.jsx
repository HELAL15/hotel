import React, { memo, useEffect, useState } from 'react'
import Seo from '../../helpers/Seo'
import Container from '../../helpers/Container'
import SecTitle from '../../components/SecTitle'
import Sorting from '../../helpers/Sorting'
import MainCard from '../../components/MainCard'
import useFetch from '../../hooks/useFetch'
import { Empty, Skeleton } from 'antd'
import { useLocation } from 'react-router'

const Wishlist = () => {
  const [removed , setRemoved] = useState(false)
  const {pathname} = useLocation()
  const {data , isLoading , refetch} = useFetch('/user/rooms/wishlist')
  useEffect(()=>{
    if(pathname === "/wishlist"){
      refetch()
    }
  },[removed])
const rooms = data?.data || []
  return (
    <>
      <Seo title="wishlist"  />
      <section className=''>
      <Container>
      <SecTitle 
          head="wishlist"
          />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
        {   isLoading ? <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-full col-span-4 my-8 '>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div> :
              rooms?.length > 0 ? rooms.map((room) => (
                <MainCard key={room.id} room={room} setRemoved={setRemoved} />
              )) : <Empty className='col-span-4 my-8'/>
            }
        </div>
      </Container>
    </section>
    </>
  )
}

export default memo(Wishlist)
