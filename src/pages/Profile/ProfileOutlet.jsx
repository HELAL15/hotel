import React from 'react'
import Container from '../../helpers/Container'
import ProfileNav from '../../components/profile/ProfileNav'
import { Outlet } from 'react-router'

const ProfileOutlet = () => {
  return (
    <>
      <section className='mt-8 relative'>
            <Container>
              <div className='grid grid-cols-1 lg:grid-cols-5 gap-[30px]'>
                <div className='col-span-5 md:col-span-1'>
                  <ProfileNav/>
                </div>
                <div className='col-span-5 md:col-span-4 relative z-10'>
                  <Outlet/>
                </div>
              </div>
            </Container>
          </section>
    </>
  )
}

export default ProfileOutlet
