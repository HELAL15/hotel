import React, { memo, useContext } from 'react'
import Container from '../helpers/Container'
import SecTitle from '../components/SecTitle'
import Sorting from '../helpers/Sorting'
import MainCard from '../components/MainCard'
import { Link } from 'react-router-dom'
import Seo from '../helpers/Seo'
import { UserContext } from '../context/UserContext'
import Cookie from 'cookie-universal';

const Services = () => {
  // const {setUser , user} = useContext(UserContext)

  const cookie = Cookie();

  const user = cookie.get("user-info")
  console.log(user);
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
          <MainCard/>
          <MainCard sale/>
          <MainCard/>
          <MainCard/>
          <MainCard/>
          <MainCard sale/>
          <MainCard/>
          <MainCard/>
          <MainCard/>
          <MainCard sale/>
          <MainCard/>
          <MainCard/>
          <MainCard/>
          <MainCard sale/>
          <MainCard/>
          <MainCard/>
        </Sorting>
      </Container>
    </section>
    </>
  )
}

export default memo(Services)
