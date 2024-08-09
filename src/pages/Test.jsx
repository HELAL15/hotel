import React, { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { convertISOToDate } from '../helpers/ConverIsoToDate'
import { CiUser } from 'react-icons/ci'
import { IoBedOutline } from 'react-icons/io5'
import { PiBathtubLight } from 'react-icons/pi'
import { LiaDoorOpenSolid } from 'react-icons/lia'

const Test = forwardRef(({ logo, icon, details }, ref) => {
  const {id} = useParams()
  const lang = useSelector((state)=>state.lang.value)
  const setting = useSelector((state)=>state.setting.value)
  console.log(details);
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
    status,
    room_id
  } = details || {}
  const {t} = useTranslation()
  return (
    <>
      <section className='mt-8  relative' ref={ref} style={{
            direction: lang === 'ar' ? 'rtl' : 'ltr',
            textAlign: lang === 'ar' ? 'right' : 'left'
          }} >
        {/* <img src={icon} alt='water mark' className=' w-[300px] h-[300px] z-0 opacity-20 object-contain absolute top-1/2 inset-x-1/2 -translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 ' /> */}
        <div className='container relative z-10 '>
          <div className='flex items-center justify-between pt-8 border-b border-b-gray-400'>
            <h1 className='text-2xl font-bold'>{t("confirmPay.report")} #{id} </h1>
            <img src={logo} alt='website logo' className=' w-[100px] h-[100px] object-contain ' />
          </div>
            <h2 className=' font-bold mt-6'>{t("confirmPay.name")} : {room_title}</h2>
            <h2 className=' font-bold mt-6'>{t("confirmPay.id")} : {room_id}</h2>
            <div className='flex flex-col gap-4 mt-4'>
              <h3 className=' font-bold '>{t("confirmPay.checkin")} : {convertISOToDate(start_date)}</h3>
              <h3 className=' font-bold '>{t("confirmPay.checkout")} : {convertISOToDate(end_date)}</h3>
            </div>
            <div className='flex  flex-col gap-2 mt-6'>
              <h5 className='font-bold'>{t("confirmPay.room")}</h5>
              <div className='flex items-center gap-2 text-black'>
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
            <div className='mt-6 text-black'>
                <h4 className='text-xl font-bold'>{t("confirmPay.price")}</h4>
                <div className='flex items-center justify-between gap-4 mt-4 font-bold'>
                  <h5 className=''>{t("confirmPay.roomp")}</h5>
                  <p>{t("$")}{price}</p>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4 font-bold'>
                  <h5 className=''>{t("confirmPay.charge")}</h5>
                  <p>%{setting?.data?.tax}</p>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4 font-bold'>
                  <h5 className=''>{t("confirmPay.total")}</h5>
                  <p>{t("$")}{total_tax_price}</p>
                </div>
            </div>
            <div className='mt-12 text-center text-black'>
              <h5 className=' font-bold text-xl'>{t("confirmPay.wish")}</h5>
              <p className='my-2 font-semibold'>{t("confirmPay.ahmed")}</p>
              <p className='mb-2 font-semibold'>{t("confirmPay.mai")}</p>
            </div>
            <p className='font-bold text-red-600 text-center mt-10'>{t("confirmPay.alert")}</p>
        </div>
      </section>
    </>
  )
})

export default Test
