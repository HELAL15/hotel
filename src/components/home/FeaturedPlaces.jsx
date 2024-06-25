import React from 'react'
import Container from '../../helpers/Container'
import SecTitle from '../SecTitle'
import Sorting from '../../helpers/Sorting'
import MainCard from '../MainCard'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import useFetch from '../../hooks/useFetch'

const FeaturedPlaces = () => {

const {data} = useFetch('/rooms')
const rooms = data?.data || []


  return (
    <>
      <section className=''>
      <Container>
      <SecTitle 
          head="Featured places to stay"
          body="Popular places to stay that Chisfis recommends for you"
          />
        <Sorting sx=''>
        {
              rooms.map((room) => (
                <MainCard key={room.id} room={room} />
              ))
            }
        </Sorting>
          <div className='grid place-items-center mt-8'>
            <Link to="/services" className='btn btn-primary flex items-center gap-3 group'> <span>view all</span> <FaArrowRightLong className='group-hover:animate-shake' /></Link>
          </div>
      </Container>
    </section>
    </>
  )
}

export default FeaturedPlaces
