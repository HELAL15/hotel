import React, { memo } from 'react'
import { useNavigate } from 'react-router'
import Container from '../helpers/Container'

const NotFound = () => {

const navigate = useNavigate()

  const handleNav = () => {
    navigate("/")
  }



  return (
    <>
      {/* <!-- component --> */}
      <Container>
        <div class="  grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-6 mt-10 items-center">
                <div class="relative ">
                    <h1 class="my-2 text-gray-800 font-bold text-2xl">
                        Looks like you've found the
                        doorway to the great nothing
                    </h1>
                    <p class="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                    <button class="btn btn-primary" onClick={handleNav}>back home page</button>
                    <img src="https://i.ibb.co/G9DC8S0/404-2.png" className='absolute top-0 ltr:left-0 rtl:right-0 z-[-1]' />
                </div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
                {/* <div class="relative h-full">
                    <div className='h-full w-full'>
                    </div>
                </div> */}
            <div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default memo(NotFound)
