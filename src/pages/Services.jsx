import React, { memo, useEffect, useState } from 'react'
import Container from '../helpers/Container'
import Sorting from '../helpers/Sorting'
import MainCard from '../components/MainCard'
import Seo from '../helpers/Seo'
import useFetch from '../hooks/useFetch'
import { Empty, Select } from 'antd'
import Loader from '../layouts/Loader'
import Skeleton from 'react-loading-skeleton'

const Services = () => {
  
  const [noGuests , setNoGuests] = useState("")

  const {data , isLoading , refetch} = useFetch(`/rooms?no_guests=${noGuests}`)
  const rooms = data?.data || []

  const handleChange = (e)=>{
    const value = e;
    setNoGuests(value ? value : "");
  }

  useEffect(()=>{
    refetch()
  },[noGuests])

  return (
    <>
          <Seo title="services"  />
          {/* {
            isLoading && <Loader/>
          } */}
          <section className='mt-8'>
      <Container>
      <div className='flex items-center justify-between gap-4 flex-wrap mb-6'>
        <h3 className='text-xl md:text-3xl capitalize font-semibold'>rooms (<span className='text-primary'>{rooms?.length}</span>)</h3>
          <div className='flex items-center gap-4 '>
            <p className='text-lg md:text-xl'>filter by guests</p>
            <Select
              defaultValue=""
              style={{ width: 90 }}
              onChange={handleChange}
              options={[
                { value: '', label: 'all' },
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
              ]}
            />
          </div>
      </div>
        <Sorting sx=''>
        {   isLoading ? <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full col-span-4 my-8 '>
          <div>
            <Skeleton height={200} />
            <Skeleton width={100}/>
            <Skeleton count={2} />
          </div>
          <div>
            <Skeleton height={200} />
            <Skeleton width={100}/>
            <Skeleton count={2} />
          </div>
          <div>
            <Skeleton height={200} />
            <Skeleton width={100}/>
            <Skeleton count={2} />
          </div>
          <div>
            <Skeleton height={200} />
            <Skeleton width={100}/>
            <Skeleton count={2} />
          </div>
        </div> :
              rooms?.length > 0 ? rooms.map((room) => (
                <MainCard key={room.id} room={room} />
              )) : <Empty className='col-span-4 my-8'/>
            }
        </Sorting>
      </Container>
    </section>
    </>
  )
}

export default memo(Services)
