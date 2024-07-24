import React, {useEffect, useMemo, useState } from 'react'
import Container from '../helpers/Container'
import MainInfo from '../components/singleService/MainInfo'
import StayInfo from '../components/singleService/StayInfo'
import Reviews from '../components/singleService/Reviews'
import ServiceImgs from '../components/singleService/ServiceImgs'
import ServiceCard from '../components/singleService/ServiceCard'
import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'
import 'react-loading-skeleton/dist/skeleton.css'
import { useLngContext } from '../context/ChangeLng'
// import Loader from '../layouts/Loader'

const SingleService = () => {
  const {id} = useParams()
  
  const {data , refetch , isLoading:loading} = useFetch(`/rooms/${id}`)
  const {lang} = useLngContext()
  
  const room = useMemo(() => data?.data || {}, [data])
  
  const [fav, setFav] = useState(room?.is_fav === 1);
  useEffect(() => {
    if (room?.is_fav !== undefined) {
      setFav(room.is_fav === 1);
    }
  }, [room]);

  useEffect(()=>{
    refetch()
  },[lang])

  return (
    <>



    <ServiceImgs imgs={room?.images} loading={loading} />

      <section className='mt-5 single-room'>
        <Container>
          <div className='relative z-10 mt-11 flex flex-col lg:flex-row flex-wrap-reverse'>
            <div className='w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 ltr:lg:pr-10 rtl:lg:pl-10 order-2 lg:order-1'>
              <MainInfo 
                title={room?.title}
                description={room?.description}
                price={room?.price}
                rates={room?.avg_review}
                bathroom = {room?.no_bathrooms}
                bedroom = {room?.no_bedrooms}
                beds = {room?.no_beds}
                guests = {room?.no_guests}
                type= {room?.type}
                id={room?.id}
                setFav={setFav}
                fav={fav}
                refetch={refetch}
                loading={loading}
              />
              <StayInfo description={room?.description} loading={loading}/>
              {/* <ThingsToKnow/> */}
              {/* <ServiceLocation/> */}
              <Reviews reviews={room?.reviews} refetch={refetch} load={loading}/>
            </div>
            <div className=' lg:block flex-grow mt-14 lg:mt-0 order-1'>
              <ServiceCard room={room} loading={loading}/>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default SingleService
