import React from 'react'
import Container from '../helpers/Container'
import { FaStar } from 'react-icons/fa6'

const CheckOut = () => {
  return (
    <>
      <section className='mt-10'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
            <div className='col-span-3 md:col-span-2 py-4 px-6 rounded-[30px] border border-gray-300'>
              <div className='border-b border-dotted border-gray-300 pb-4'>
                <h2 className='font-semibold text-lg md:text-2xl'>Confirm and payment</h2>
              </div>
              <div className='my-4'>
                <h3 className='text-xl font-semibold'>your trip</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-4 p-4 rounded-[30px] border border-gray-300'>
                  <div className='flex  flex-col gap-2'>
                    <span className='font-medium'>date</span>
                    <div className='flex items-center gap-2'>
                      <span>Mon, 12 Aug 2021</span>
                      <span>-</span>
                      <span>Mon, 12 Aug 2021</span>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <input type='radio' name='payment' id='credit' className='form-radio' />
                    <label htmlFor='credit'>Credit card</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-3 md:col-span-1 py-4 px-6 rounded-[30px] border border-gray-300'>
              <div className='flex items-center flex-wrap gap-4 border-b border-dotted border-gray-300 pb-4'>
                <img src={'https://backend.smartvision4p.com/hotel/public/storage/rooms/10/service3.webp'} className=' aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden object-cover sm:w-40'/>
                <div className=''>
                  <h4 className='text-xl font-semibold'>Hotel room in Tokyo,</h4>
                  <p className='text-neutral-500'>The Lounge & Bar</p>
                  <div className='flex items-center gap-1 mb-2'>
                    <p className='text-neutral-500'>2 beds</p>
                    <span className='for-divide text-center grid place-items-center'>.</span>
                    <p className='text-neutral-500'>2 baths</p>
                  </div>
                  <p className='text-neutral-500 flex items-center gap-1 pt-2 border-t border-gray-300'>
                  <i className='text-yellow-300'><FaStar/></i>
                    <span>4.5 (112)</span>
                  </p>
                </div>
              </div>
              <div className='mt-4 border-b border-dotted border-gray-300 pb-4'>
                <h4 className='text-xl font-semibold'>Booking details</h4>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>Check-in</h5>
                  <p>Mon, 12 Aug 2021</p>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>Check-out</h5>
                  <p>Mon, 12 Aug 2021</p>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>Guests</h5>
                  <p>2 guests</p>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>Rooms</h5>
                  <p>1 room</p>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>Nights</h5>
                  <p>1 night</p>
                </div>
              </div>
              <div className='mt-4'>
                <h4 className='text-xl font-semibold'>Price details</h4>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>Room price</h5>
                  <p>$120</p>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>Service charge</h5>
                  <p>$20</p>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>Total</h5>
                  <p>$140</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CheckOut
