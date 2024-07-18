import React, { memo, useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import Datec from './Datec';
import { BookServiceContext } from '../../context/BookServiceContext';
import { ConvertDecimel } from '../../helpers/ConvertDecimel';
import RoomType from './RoomType';
import { request } from '../../api/request';
import { useNavigate, useParams } from 'react-router';
import Counter from './Counter';
import { toast } from 'react-toastify';

const ServiceCard = ({ room }) => {
  const { nights, mealP, date, roomCounts, option } = useContext(BookServiceContext);
  const [totalGuestPrice, setTotalGuestPrice] = useState(0);
  const [guestData, setGuestData] = useState([]);

  const navigate = useNavigate()

  const { id } = useParams();
  console.log(date);

  const handleCountChange = (label, type, count, total, updatedGuestData) => {
    setTotalGuestPrice(total);
    setGuestData(updatedGuestData);
  };

  const handleBookNow = () => {
    if (!date || date.length < 2 || !roomCounts || !mealP || !option) {
      console.error("Missing required fields");
      toast.error("Missing required fields")
      return;
    }

    const formattedGuestData = guestData.reduce((acc, group, index) => {
      Object.entries(group).forEach(([key, value]) => {
        acc[`${key}[${index}]`] = value;
      });
      return acc;
    }, {});


    const formData = new FormData()

    Object.entries(formattedGuestData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append('type', option);
    formData.append('no_rooms', roomCounts);
    formData.append('end_date', date[1]);
    formData.append('start_date', date[0]);


    request.post(`/user/rooms/${id}/reservation`, formData)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message)
        // navigate("/profile")

      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.message)
        navigate("/login")
      });
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
          <RoomType room={room} />
        </div>
        <Counter
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
        <p>${(((room?.price_per_day * nights) + (room?.tax )) + Number(mealP) + totalGuestPrice)}</p>
      </div>
      <div className='flex justify-center'>
        <button className='btn btn-primary w-full' onClick={handleBookNow}>Book now</button>
      </div>
    </div>
  );
};

export default memo(ServiceCard);
