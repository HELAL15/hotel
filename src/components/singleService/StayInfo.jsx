import React, { memo } from 'react'

const StayInfo = () => {
  return (
    <>
      <div className='my-4 rounded-[30px] border border-neutral-200 overflow-hidden p-4'>
              <h2 className='text-2xl font-semibold pb-4 relative border-b border-b-neutral-200 w-fit'>Stay information</h2>
              <p className='mt-5 font-semibold'>Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities. Complimentary WiFi is provided.
                There is a private bathroom with bidet in all units, along with a hairdryer and free toiletries.
                The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service and a car rental service are 
                available at the accommodation, while cycling can be enjoyed nearby.</p>
              </div>
    </>
  )
}

export default memo(StayInfo)
