import React, { memo } from 'react'

const ThingsToKnow = () => {
  return (
    <>
     <div className='my-4 rounded-[30px] border border-neutral-200 overflow-hidden p-4'>
                <h2 className='text-2xl font-semibold pb-4 relative border-b border-b-neutral-200 w-fit '>things to know</h2>
                <div className='mt-5 border-b border-b-neutral-200  pb-4'>
                  <h3 className='text-2xl font-semibold pb-2'>Cancellation policy</h3>
                  <p className='mt-2 font-semibold'>Refund 50% of the booking value when customers cancel the room within 48 hours after successful booking and 14 days before the check-in time.
Then, cancel the room 14 days before the check-in time, get a 50% refund of the total amount paid (minus the service fee)..</p>
                </div>
                <div className='mt-5 border-b border-b-neutral-200  pb-4'>
                  <h3 className='text-2xl font-semibold pb-2'>Check-in time</h3>
                  <div className='flex items-center justify-between gap-4 font-semibold text-lg capitalize w-full my-4 md:w-1/2 rounded-md bg-slate-200 py-2 px-3'>
                    <p>Check-in</p>
                    <p className='flex items-center gap-1'>
                      <span>08:00 am</span>
                      <span>-</span>
                      <span>12:00 am</span>
                    </p>
                  </div>
                  <div className='flex items-center justify-between gap-4 font-semibold text-lg capitalize w-full md:w-1/2 rounded-md bg-slate-100 py-2 px-3'>
                    <p>Check-out</p>
                    <p className='flex items-center gap-1'>
                      <span>02:00 pm</span>
                      <span>-</span>
                      <span>04:00 pm</span>
                    </p>
                  </div>
                </div>
                <div className='mt-5   pb-4'>
                  <h3 className='text-2xl font-semibold pb-2'>Special Note</h3>
                  <ul className='list-disc px-8 font-semibold'>
                    <li className='mb-2'>Ban and I will work together to keep the landscape and environment green and clean by not littering, not using stimulants and respecting people around.</li>
                    <li className='mb-2'>Do not sing karaoke past 11:30</li>
                  </ul>
                </div>
              </div> 
    </>
  )
}

export default memo(ThingsToKnow)
