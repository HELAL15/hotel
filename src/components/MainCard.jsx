import React, { memo, useContext, useState } from 'react';
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SwiperDirContext } from '../context/SwiperDir';
import { request } from '../api/request';
import { ConvertDecimel } from '../helpers/ConvertDecimel';
import empty from '../img/emptyImg.PNG'

const MainCard = ({ sale, room , setRemoved }) => {
  const [fav, setFav] = useState(room?.is_fav === 1);
  const { dir } = useContext(SwiperDirContext);
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const handleFav = () => {
    request.post(`/user/rooms/${room.id}/wishlist`)
      .then(res => {
        setFav(!fav);
        if(pathname === "/wishlist"){
          setRemoved((prev)=>!prev)
        }
        toast.success(res.data.message);
      })
      .catch(error => {
        navigate("/login")
        toast.error(error.response.data.message);
      });
  };

  return (
    <>

      <div className='card relative z-10'>
        <button aria-label='fav-button' onClick={handleFav} className='absolute top-2 right-2 z-50 h-[35px] w-[35px] rounded-full overflow-hidden text-white bg-black/30 hover:bg-black/40 duration-300 grid place-items-center text-lg'>
          <i className='text-white'>{fav ? <FaHeart /> : <FaRegHeart />}</i>
        </button>
        {sale && <span className='bg-red-700 text-white text-sm font-semibold px-4 rounded-2xl absolute top-3 left-2 z-40'>-10% today</span>}
        <Link to={`/services/${room?.id}`}>
          <div className='card-header h-[250px] md:h-[300px] mb-4 overflow-hidden rounded-xl'>
            <Swiper
              className='h-full w-full'
              modules={[Navigation, Pagination, Scrollbar]}
              dir={dir}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {room?.images.length > 0 ?
                room?.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img className='h-full w-full object-cover' loading='lazy' src={img.url} alt={`img-${i}`} />
                </SwiperSlide>
              )):<SwiperSlide>
              <img className='h-full w-full object-cover' loading='lazy' src={empty} alt={`empty`} />
              </SwiperSlide>}
            </Swiper>
          </div>
          <div className='card-body flex flex-col gap-1'>
            <p className='text-neutral-500 flex items-center gap-2 divide-x-2 divide-double divide-gray-200'>
              <span>{room?.type}</span>
              <span className='pl-2'>{room?.no_beds} beds</span>
            </p>
            <p className='font-semibold text-black'>{room?.title.slice(0, 35)}...</p>
            <div className='flex items-center justify-between details mt-4 '>
              <p className='flex items-center gap-1 font-semibold'>
                <span className='text-black'>${room?.price_per_day}</span>
                <span className='text-neutral-500'>/ night</span>
              </p>
              <p className='flex items-center gap-2 rate text-neutral-500'>
                <i className='text-yellow-400'><FaStar /></i>
                <span>{ConvertDecimel(room?.avg_review)}</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default memo(MainCard);
