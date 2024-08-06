import React, { memo, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // useParams should be imported from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import NotFound from './NotFound';
import Container from '../helpers/Container';
import { convertISOToDate } from '../helpers/ConverIsoToDate';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtubLight } from 'react-icons/pi';
import { LiaDoorOpenSolid } from 'react-icons/lia';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';

const PayDone = () => {
  const { id } = useParams();
  const setting = useSelector((state)=> state.setting.value)
  const { data, response, isLoading, error } = useFetch(`user/reservations/${id}`);

  // const {data:check} = useFetch(`/user/reservations/${id}`)
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



const content =  useReactToPrint({
  content: () => componentRef.current,
});

const navigate = useNavigate()

const componentRef = useRef();
  // const handlePrint =  ()=>{
  //     content()
  //    .then(()=>{
  //     localStorage.removeItem('reservationId')
  //    })
  //    .then(()=>{
  //       navigate('/rooms')
  //    })

  // } 

  const handlePrint =  () => {
       content()
      setTimeout(() => {
        localStorage.removeItem('reservationId')
        navigate('/rooms')
      }, 2500);
  };



  console.log(data);
  
  // if (data?.status === 'Success') {
  //   localStorage.removeItem('reservationId');
  // }
  const reserveId = localStorage.getItem('reservationId');

  // Render NotFound if the reservation ID doesn't match
  if (id !== reserveId) {
    return <NotFound />;
  }



  // Handle error state
  if (error) {
    return <div>Error loading reservation data.</div>;
  }

  return (
    <>
      <section className='mt-5'>
        <div className='container' ref={componentRef}>
          <div className='' >
          <h2 className='text-3xl font-bold pb-5 mb-5 border-b border-b-gray-500'>Congratulation</h2>
            <h3 className='text-lg font-semibold'>your book</h3>
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
                <div className='col-span-3 md:col-span-1 py-4 px-6 rounded-[30px] border border-gray-300 mt-5'>
              <div className='flex  flex-col flex-wrap gap-4 border-b border-dotted border-gray-300 pb-4'>
                {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-4'>

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

                </div> */}
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
            </div>
          </div>
        </div>
        <Container>
          <div className='mt-4'>
            <button className='btn btn-primary w-full' onClick={handlePrint} >print</button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default memo(PayDone);
