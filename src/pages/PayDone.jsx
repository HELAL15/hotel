import React, { memo, useEffect, useRef } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'; // useParams should be imported from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import NotFound from './NotFound';
import Container from '../helpers/Container';
import { convertISOToDate } from '../helpers/ConverIsoToDate';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtubLight } from 'react-icons/pi';
import { LiaDoorOpenSolid } from 'react-icons/lia';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { useTranslation } from 'react-i18next';
import Test from './Test';
import { CiUser } from 'react-icons/ci';

const PayDone = () => {
  const { id } = useParams();
  const setting = useSelector((state)=> state.setting.value)
  const lang = useSelector((state)=>state.lang.value)
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
  status
} = checkoutData || {}

const {t} = useTranslation()

const content =  useReactToPrint({
  content: () => componentRef.current,
});

const navigate = useNavigate()

const componentRef = useRef();
 
  const handlePrint =  () => {
       content()
      setTimeout(() => {
        localStorage.removeItem('reservationId')
        navigate('/rooms')
      }, 2500);
  };

  const reserveId = localStorage.getItem('reservationId');

  // Render NotFound if the reservation ID doesn't match
  if (id !== reserveId) {
    return <NotFound />;
  }

  if (status === 'pending' ) {
    return <Navigate to={`/checkout/${id}`} replace />
  }


  // Handle error state
  if (error) {
    return <div>Error loading reservation data.</div>;
  }
console.log(checkoutData);
  return (
    <>
      <section className='mt-5'>
        <div className='container' >
          <div className='' >
          <h2 className='text-2xl font-bold pb-5 my-5 border-b border-b-gray-400'>{t("confirmPay.congrats")}</h2>
            <h3 className='text-lg font-semibold'>{t("confirmPay.trip")}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-4 p-4 rounded-[30px] border border-gray-300'>
                  <div className='flex  flex-col gap-2'>
                    <h5 className='font-medium'>{t("confirmPay.checkin")}</h5>
                    <div className='flex items-center gap-2'>
                      {convertISOToDate(start_date)}
                    </div>
                  </div>
                  <div className='flex  flex-col gap-2'>
                    <h5 className='font-medium'>{t("confirmPay.checkout")}</h5>
                    <div className='flex items-center gap-2'>
                      {convertISOToDate(end_date)}
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 mt-4 p-4 rounded-[30px] border border-gray-300'>
                <div className='flex  flex-col gap-2'>
                    <h5 className='font-medium'>{t("confirmPay.room")}</h5>
                    <div className='flex items-center gap-2'>
                      {
                        room_no_guests !== 0 &&
                        <p className='flex items-center gap-2 '>
                          <i className=''><CiUser /></i>
                          <span className=''>{room_no_guests} {room_no_guests === 1 ? t("confirmPay.guest") : t("confirmPay.guests") }</span>
                        </p>
                      }
                      {
                        room_no_beds !== 0 &&
                        <p className='flex items-center gap-2 '>
                          <i className=''><IoBedOutline /></i>
                          <span className=''>
                            {room_no_beds} { room_no_beds === 1 ? t("confirmPay.bed") : t("confirmPay.beds") }
                          </span>
                        </p>
                      }
                      {
                        room_no_bathrooms !== 0 &&
                        <p className='flex items-center gap-2 '>
                          <i className=''><PiBathtubLight /></i>
                          <span className=''>
                            {room_no_bathrooms} { room_no_bathrooms === 1 ? t("confirmPay.bath") : t("confirmPay.baths") }
                          </span>
                        </p>
                      }
                      {
                        room_no_bedrooms !== 0 &&
                        <p className='flex items-center gap-2 '>
                          <i className=''><LiaDoorOpenSolid /></i>
                          <span className=''>
                            {room_no_bedrooms}  { room_no_bedrooms === 1 ? t("confirmPay.bedroom") : t("confirmPay.bedrooms") }
                          </span>
                        </p>
                      }
                    </div>
                  </div>
                </div>
                <div className='col-span-3 md:col-span-1 py-4 px-6 rounded-[30px] border border-gray-300 mt-5'>
              <div className='flex  flex-col flex-wrap gap-4 border-b border-dotted border-gray-300 pb-4'>
                <div className=''>
                  <h4 className='text-xl font-semibold'>{room_title}</h4>
                </div>
              </div>
              <div className='mt-4'>
                <h4 className='text-xl font-semibold'>{t("confirmPay.price")}</h4>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>{t("confirmPay.roomp")}</h5>
                  <p>{t("$")}{price}</p>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>{t("confirmPay.charge")}</h5>
                  <p>%{setting?.data?.tax}</p>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4'>
                  <h5 className=''>{t("confirmPay.total")}</h5>
                  <p>{t("$")}{total_tax_price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container>
          <div className='mt-4'>
            <button className='btn btn-primary w-full' onClick={handlePrint} >{t("confirmPay.print")}</button>
          </div>
        </Container>
      </section>
      <div className='hidden'>
        <Test logo={setting?.data?.logo} icon={setting?.data?.favicon} details={checkoutData} ref={componentRef} />
      </div>
    </>
  );
};

export default memo(PayDone);
