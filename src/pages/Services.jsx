import React, { memo, useContext } from 'react'
import Container from '../helpers/Container'
import SecTitle from '../components/SecTitle'
import Sorting from '../helpers/Sorting'
import MainCard from '../components/MainCard'
import { Link } from 'react-router-dom'
import Seo from '../helpers/Seo'
import { UserContext } from '../context/UserContext'
import Cookie from 'cookie-universal';
import useFetch from '../hooks/useFetch'

const Services = () => {
  // const {setUser , user} = useContext(UserContext)

  const cookie = Cookie();

  // const user = cookie.get("user-info")
  // console.log(user);

  const {data} = useFetch('/rooms')
console.log(data);
const rooms = data?.data || []
  return (
    <>
          <Seo title="services"  />
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
      </Container>
    </section>
    </>
  )
}

export default memo(Services)
