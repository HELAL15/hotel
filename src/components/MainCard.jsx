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
import { request } from '../api/request';
import { ConvertDecimel } from '../helpers/ConvertDecimel';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const MainCard = ({ sale, room , setRemoved }) => {

  const {t} = useTranslation()

  const setting = useSelector((state) => state.setting.value);
  let data = setting?.data || null
  const {
    logo ,
    site_name,
  } = data || {} ;


  const lang = useSelector((state) => state.lang.value);
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const [fav, setFav] = useState(room?.is_fav === 1);
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const handleFav = () => {
    setFav(!fav);
    request.post(`/user/rooms/${room.id}/wishlist`)
      .then(res => {
        // setFav(!fav);
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
        <Link to={`/rooms/${room?.id}`} className='flex flex-col h-full' >
          <div className='card-header h-[250px] md:h-[280px] mb-4 overflow-hidden rounded-xl'>
            <Swiper
              className='h-full w-full card-swiper'
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
              )):<SwiperSlide className='bg-primary/10'>
              <img className='h-full w-full object-contain mx-auto' loading='lazy' src={logo} alt={site_name} />
              </SwiperSlide>}
            </Swiper>
          </div>
          <div className='card-body flex flex-col justify-between gap-1 flex-grow'>
            <p className='text-neutral-500 flex  items-center gap-2 divide-x divide-double divide-gray-200'>
              <span className='rtl:pl-2 order-1 rtl:order-2'>{t(`selectType.${room?.type}`)}</span>
              <span className='pl-2 order-2 rtl:order-1'>{room?.no_beds} {t("bed")}</span>
            </p>
            <p className='font-semibold text-black '>{room?.title}</p>
            <div className='flex items-center justify-between details mt-4 '>
              <p className='flex items-center gap-1 font-semibold'>
                <span className='text-black'>{t("$")}{room?.price_per_day}</span>
                <span className='text-neutral-500'>/ {t("day")}</span>
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
