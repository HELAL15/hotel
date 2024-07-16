import React, { memo, useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import Datec from './Datec';
import { BookServiceContext } from '../../context/BookServiceContext';
import Counterrr from './Counterrr'; 
import { ConvertDecimel } from '../../helpers/ConvertDecimel';
import RoomType from './RoomType';
import { request } from '../../api/request';
import { useParams } from 'react-router';

const ServiceCard = ({ room }) => {
  const { collectCounts, nights, mealP,  date , roomCounts , option } = useContext(BookServiceContext);
  const [totalGuestPrice, setTotalGuestPrice] = useState(0);
  const [guestData, setGuestData] = useState([]);

  const {id} = useParams()



  const handleCountChange = (label, type, count, total, updatedGuestData) => {
    collectCounts(label, type, count);
    setTotalGuestPrice(total);
    setGuestData(updatedGuestData);
  };

  const handleBookNow = () => {

    const formattedGuestData = guestData.reduce((acc, group, index) => {
      Object.entries(group).forEach(([key, value]) => {
        acc[`${key}[${index}]`] = value;
      });
      return acc;
    }, {});

    const bookingData = {
      ...formattedGuestData,
      start_date: date[0],
      end_date: date[1],
      no_rooms: roomCounts,
      type:option,
    };

    console.log(bookingData);

  request.post(`/user/rooms/${id}/reservation` ,bookingData )
  .then((res)=>{
    console.log(res.data);
  })
  .catch((err)=>{
    console.log(err.response.data);
  })



  };

  return (
    <div className='sticky top-28 rounded-[30px] overflow-hidden border border-neutral-200 p-4 mb-8 w-full'>
      <div className='flex items-center justify-between gap-4 '>
        <p className='flex items-center gap-1 text-xl'>
          <span className='text-black text-2xl'>${room?.price_per_day}</span>
          <span>/ night</span>
        </p>
        <p className='flex items-center gap-2 rate text-neutral-500'>
          <i className='text-yellow-400'><FaStar /></i>
          <span className='text-black'>{ConvertDecimel(room?.avg_review)}</span>
        </p>
      </div>
      <div className='actions rounded-[30px] overflow-hidden flex flex-col border border-neutral-200 my-4 divide-y-2 divide-neutral-100'>
        <div className='flex w-full overflow-x-auto px-2 py-4'>
          <Datec />
        </div>
        <div className='py-4 px-4'>
          <h4 className='mb-2 text-xl font-semibold'>day meal</h4>
          <RoomType room={room}/>
        </div>
        <Counterrr
          label="Guests"
          onCountChange={handleCountChange}
          adultPrice={room?.adult_price}
          childPrice={room?.children_price}
          infantPrice={room?.infant_price}
        />
      </div>
      <div className='calcs flex flex-col gap-4 pb-4 border-b border-b-neutral-200 font-semibold'>
        <p className='flex items-center justify-between gap-3'>
          <span>${room?.price_per_day} x {nights} nights</span>
          <span>${room?.price_per_day * nights}</span>
        </p>
        <p className='flex items-center justify-between gap-3'>
          <span>Service charge</span>
          <span>${room?.tax}</span>
        </p>
      </div>
      <div className='text-black font-semibold text-lg flex items-center justify-between gap-4 my-3'>
        <p>Total</p>
        <p>${(((room?.price_per_day * nights) + (room?.tax)) + Number(mealP) + totalGuestPrice)}</p>
      </div>
      <div className='flex justify-center'>
        <button className='btn btn-primary w-full' onClick={handleBookNow}>Book now</button>
      </div>
    </div>
  );
};

export default memo(ServiceCard);
