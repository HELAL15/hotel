import React from 'react'
import Container from '../../helpers/Container'
import ProfileNav from '../../components/profile/ProfileNav'
import { Outlet } from 'react-router'
import StyledAnim from '../../components/StyledAnim'
// flex flex-wrap md:flex-row md:flex-nowrap gap-6 lg:gap-8
// w-full md:w-1/4
// w-full md:w-3/4
const ProfileOutlet = () => {
  return (
    <>
      <section className='mt-8 relative'>

            <Container>
              <div className='grid grid-cols-1 lg:grid-cols-5'>
                <div className=''>
                  <ProfileNav/>
                </div>
                <div className='col-span-3 md:col-span-4 relative z-10'>
                <StyledAnim />
                  <Outlet/>
                </div>
              </div>
            </Container>
          </section>
    </>
  )
}

export default ProfileOutlet
