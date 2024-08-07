import React, { memo, useEffect } from 'react'
import Container from '../../helpers/Container'
import SecTitle from '../SecTitle'
import Sorting from '../../helpers/Sorting'
import MainCard from '../MainCard'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import useFetch from '../../hooks/useFetch'
import { useSelector } from 'react-redux'

const FeaturedPlaces = () => {



  const lang = useSelector((state) => state.lang.value)


const {data } = useFetch('/rooms?in_home=1' , [lang])

const rooms = data?.data.data || []



  return (
    <>
      <section className=''>
      <Container>
      <SecTitle 
          head="featured.head"
          body="featured.body"
          />
        <Sorting sx=''>
        {
              rooms.map((room) => (
                <MainCard key={room.id} room={room} />
              ))
            }
        </Sorting>
          <div className='grid place-items-center mt-8'>
            <Link to="/rooms" className='btn btn-primary flex items-center gap-3 group'> <span>view all</span> <FaArrowRightLong className='rtl:-scale-100' /></Link>
          </div>
      </Container>
    </section>
    </>
  )
}

export default memo(FeaturedPlaces)
