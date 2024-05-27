import React, { Suspense, memo, useState } from 'react';
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import img1 from '../img/p1.webp';
import img2 from '../img/p2.webp';
import img3 from '../img/p3.webp';
import img4 from '../img/p4.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainCard = ({sale}) => {
  const [fav, setFav] = useState(false);

  const handleFav = () => {
    setFav(!fav);
    if (!fav) {
      console.log('add to fav');
      // toast('Added to favorites');
    } else {
      console.log('remove from fav');
      // toast('Removed from favorites');
    }
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='card relative z-10'>
          <ToastContainer />
          <button onClick={handleFav} className='absolute top-2 right-2 z-50 h-[35px] w-[35px] rounded-full overflow-hidden text-white bg-black/30 hover:bg-black/40 duration-300 grid place-items-center text-lg'>
            <i className='text-white'>{fav ? <FaHeart /> : <FaRegHeart />}</i>
          </button>
          {
            sale && <span className='bg-red-700 text-white text-sm font-semibold px-4 rounded-2xl absolute top-3 left-2 z-40'>-10% today</span>
          }
          <Link to={`/services/${1}`}>
            <div className='card-header h-[250px] md:h-[300px] mb-4 overflow-hidden rounded-xl'>
              <Swiper
                className='h-full w-full'
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide><img className='h-full w-full object-cover' src={img1} alt='img' /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover' src={img2} alt='img' /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover' src={img3} alt='img' /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover' src={img4} alt='img' /></SwiperSlide>
              </Swiper>
            </div>
            <div className='card-body flex flex-col gap-1'>
              <p className='text-neutral-500 flex items-center gap-2 divide-x-2 divide-double divide-gray-200'>
                <span>entire cabin</span>
                <span className='pl-2'>{10} beds</span>
              </p>
              <p className='font-semibold text-black'>Lorem ipsum dolor sit amet, consectetur</p>
              <p className='flex items-center gap-1 text-neutral-500 font-semibold'>
                <i className=''><IoLocationOutline /></i>
                <span>egypt</span>
              </p>
              <div className='flex items-center justify-between details mt-4 '>
                <p className='flex items-center gap-1 font-semibold'>
                  <span className='text-black'>$ {`${15}`}</span><span className='text-neutral-500'>/ night</span>
                </p>
                <p className='flex items-center gap-2 rate text-neutral-500'>
                  <i className='text-yellow-400'><FaStar /></i>
                  <span>4.5</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </Suspense>
    </>
  );
};

export default memo(MainCard);
