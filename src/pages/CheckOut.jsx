import React from 'react'
import Container from '../helpers/Container'
import { FaStar } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import NotFound from './NotFound'
import useFetch from '../hooks/useFetch'
import { useNavigate, useParams } from 'react-router'
import { convertISOToDate } from '../helpers/ConverIsoToDate'
import { CiUser } from 'react-icons/ci'
import { IoBedOutline } from 'react-icons/io5'
import { PiBathtubLight } from 'react-icons/pi'
import { LiaDoorOpenSolid } from 'react-icons/lia'
import { request } from '../api/request'

const CheckOut = () => {


  const reservation = useSelector((state)=>state.reservation.value)

  const setting = useSelector((state)=> state.setting.value)

  
  const {id} = useParams()

const {data , response} = useFetch(`/user/reservations/${id}`)
const checkoutData = data?.data

const {
  start_date,
  end_date,
  total_tax_price,
  type,
  room_title,
  room_no_guests,
  room_no_bathrooms,
  room_no_bedrooms,
  room_no_beds,
  price,
  images,
  details,
} = checkoutData || {}


const navigate = useNavigate()

const handleConfirm = async ()=>{
  try{
    const res = await request.post(`/payment/${id}`)
    if(res){
      // const fullUrl = `${window.location.origin}/${res?.data?.data}`;
      const link = res?.data?.data;
      const fullUrl = link.startsWith('http://') || link.startsWith('https://') ? link : `http://${link}`;
      window.open(fullUrl, '_blank');
    }
  }catch(err){
    console.log(err);
  }


}




const res404 = response?.response?.status
  if(res404 === 404 ) {
    return <NotFound/>
  }

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
                    <h5 className='font-medium'>check in</h5>
                    <div className='flex items-center gap-2'>
                      {convertISOToDate(start_date)}
                    </div>
                  </div>
                  <div className='flex  flex-col gap-2'>
                    <h5 className='font-medium'>check out</h5>
                    <div className='flex items-center gap-2'>
                      {convertISOToDate(end_date)}
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 mt-4 p-4 rounded-[30px] border border-gray-300'>
                  <div className='flex  flex-col gap-2'>
                    <h5 className='font-medium'>guests</h5>
                    <div className='flex items-center gap-2'>
                      <span>{room_no_guests} guests</span>
                      <span>{checkoutData?.details[0]?.child} child</span>
                      <span>{checkoutData?.details[0]?.infant} infant</span>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 mt-4 p-4 rounded-[30px] border border-gray-300'>
                  <div className='flex  flex-col gap-2'>
                    <h5 className='font-medium'>room details</h5>
                    <div className='flex items-center gap-2'>
                      <p className='flex items-center gap-2 '>
                        <i className=''><IoBedOutline /></i>
                        <span className=''>{room_no_beds} beds</span>
                      </p>
                      <p className='flex items-center gap-2 '>
                        <i className=''><PiBathtubLight /></i>
                        <span className=''>{room_no_bathrooms} baths</span>
                      </p>
                      <p className='flex items-center gap-2 '>
                        <i className=''><LiaDoorOpenSolid /></i>
                        <span className=''>{room_no_bedrooms} bedrooms</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-3 md:col-span-1 py-4 px-6 rounded-[30px] border border-gray-300'>
              <div className='flex  flex-col flex-wrap gap-4 border-b border-dotted border-gray-300 pb-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-4'>

                  <div className='relative rounded-md overflow-hidden'>
                  {checkoutData?.images[0]?.url && (
                    <img
                      loading='lazy'
                      src={checkoutData?.images[0]?.url}
                      alt='service'
                      className='w-full h-full object-cover rounded-lg aspect-[5/3]'
                    />
                  )}
                  </div>
                    <div className='relative grid grid-cols-2 gap-2'>

                    <div className='rounded-md overflow-hidden'>
                      <img
                        loading='lazy'
                        src={checkoutData?.images[1]?.url}
                        alt='service'
                        className='w-full h-full object-cover rounded-lg'
                      />
                    </div>

                    <div className='rounded-md overflow-hidden'>
                      <img
                        loading='lazy'
                        src={checkoutData?.images[2]?.url}
                        alt='service'
                        className='w-full h-full object-cover rounded-lg'
                      />
                    </div>

                    <div className='rounded-md overflow-hidden'>
                      <img
                        loading='lazy'
                        src={checkoutData?.images[3]?.url}
                        alt='service'
                        className='w-full h-full object-cover rounded-lg'
                      />
                    </div>

                    <div className='rounded-md overflow-hidden'>
                      <img
                        loading='lazy'
                        src={checkoutData?.images[4]?.url}
                        alt='service'
                        className='w-full h-full object-cover rounded-lg'
                      />
                    </div>

                  </div>

                </div>
                <div className=''>
                  <h4 className='text-xl font-semibold'>{room_title}</h4>
                </div>
              </div>

              <div className='mt-4'>
                <h4 className='text-xl font-semibold'>Price details</h4>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>Room price</h5>
                  <p>${price}</p>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>Service charge</h5>
                  <p>%{setting?.data?.tax}</p>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>Total</h5>
                  <p>${total_tax_price}</p>
                </div>
              </div>
              <div className='mt-4'>
                <button className='btn btn-primary w-full' onClick={handleConfirm} >confirm</button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CheckOut
