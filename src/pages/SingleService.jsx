import React, {memo, useEffect, useMemo, useState } from 'react'
import Container from '../helpers/Container'
import MainInfo from '../components/singleService/MainInfo'
import StayInfo from '../components/singleService/StayInfo'
import Reviews from '../components/singleService/Reviews'
import ServiceImgs from '../components/singleService/ServiceImgs'
import ServiceCard from '../components/singleService/ServiceCard'
import { Navigate, useLocation, useParams } from 'react-router'
import useFetch from '../hooks/useFetch'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux'
import NotFound from './NotFound'
import ReservationForm from '../components/singleService/ReservationForm'
import { setChildDefault, setID, setInfantDefault, setType } from '../redux/features/reservationSlice'
import { setDate } from 'date-fns'
import Seo from '../helpers/Seo'
import SecTitle from '../components/SecTitle'
import Sorting from '../helpers/Sorting'
import MainCard from '../components/MainCard'
import { Empty } from 'antd'
import Skeleton from 'react-loading-skeleton'
// import Loader from '../layouts/Loader'

const SingleService = () => {
  const lang = useSelector((state)=>state.lang.value);
  const {id} = useParams()
  
  const {data , refetch , isLoading:loading  , response} = useFetch(`/rooms/${id}` , [lang])

  console.log(data)

  const res404 = response?.response?.status
  
  const room = useMemo(() => data?.data?.single || {}, [data])
  const same = data?.data?.same || []
  console.log(same);
  
  const [fav, setFav] = useState(room?.is_fav === 1);
  useEffect(() => {
    if (room?.is_fav !== undefined) {
      setFav(room.is_fav === 1);
    }
  }, [room]);

  // useEffect(()=>{
  //   refetch()
  // },[lang])







if (res404 === 404 ) {
  return <NotFound/>
}




  return (
    <>

    <Seo title={room?.title} single={true} />


    <ServiceImgs imgs={room?.images} loading={loading} />

      <section className='mt-0 single-room'>
        <Container>
          <div className='relative z-10 mt-4 md:mt-11 flex flex-col lg:flex-row flex-wrap-reverse'>
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
              <ReservationForm room={room} />
            </div>
          </div>
        </Container>
      </section>


      <section>
        <Container>
          <SecTitle head="same.head" body="same.body" />
          <Sorting sx={"lg:grid-cols-4 xl:grid-cols-5"}>

            {loading ? (
              <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full col-span-5 my-1'>
                {[...Array(5)].map((_, index) => (
                  <div key={index}>
                    <Skeleton height={200} />
                    <Skeleton width={100} />
                    <Skeleton count={2} />
                  </div>
                ))}
              </div>
            ) : (
              same.length > 0 ? (
                same.map((room) => <MainCard key={room.id} room={room} />)
              ) : (
                <Empty className='col-span-4 my-8' />
              )
            )}
          </Sorting>
        </Container>
      </section>


    </>
  )
}

export default memo(SingleService)
