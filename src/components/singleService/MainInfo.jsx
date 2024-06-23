import React, { memo, useState } from 'react'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
import { CiUser } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { request } from '../../api/request';
import { toast } from 'react-toastify';
import { ConvertDecimel } from '../../helpers/ConvertDecimel';

const MainInfo = ({
  title,
  rates,
  bathroom ,
  bedroom ,
  beds ,
  guests,
  type,
  id,
  isFav,
  refetch
}) => {
  const [fav, setFav] = useState(isFav === 1);

  const handleFav = () => {
    request.post(`/user/rooms/${id}/wishlist`)
      .then(res => {
        setFav(!fav);
        refetch()
        toast.success(res.data.message);
      })
      .catch(error => {
        // setFav(!fav);
        toast.error(error.response.data.message);
      });
  };



  return (
    <>
      <div className='my-4 mt-0 rounded-[30px] border border-neutral-200 overflow-hidden p-4'>
                <div className='flex items-center justify-between gap-4'>
                  <span className='bg-primary/20 text-primary font-semibold capitalize px-3 rounded-[30px] text-sm'>{type}</span>
                  <button className='flex items-center gap-2 px-3 rounded-md duration-300 hover:bg-slate-200' onClick={handleFav}>
                  {/* <i> <FaHeart className= {fav? 'text-primary' : ''}  /></i> */}
                  <i className='text-primary'>{fav ? <FaHeart /> : <FaRegHeart />}</i>
                    <span>wishlist</span>
                  </button>
                </div>
                <div className='flex flex-col gap-4 my-4'>
                  <h2 className='text-3xl text-black capitalize'>{title}</h2>
                  <div className='flex items-center gap-8'>
                    <p className='flex items-center gap-2 rate text-neutral-500'>
                      <i className='text-yellow-400'><FaStar /></i>
                      <span className='text-black'>{ConvertDecimel(rates)}</span>
                    </p>
                    {/* <p className='flex items-center gap-1 text-neutral-500 font-semibold'>
                      <i className=''><IoLocationOutline /></i>
                      <span>egypt</span>
                    </p> */}
                  </div>
                </div>
                <div className='flex items-center gap-4 md:gap-8 flex-wrap pt-5 border-t border-t-neutral-200 text-neutral-600 text-xl'>
                    <p className='flex items-center gap-2 text-neutral-500'>
                      <i className=''><CiUser /></i>
                      <span className=''>{guests} guests</span>
                    </p>
                    <p className='flex items-center gap-2 text-neutral-500'>
                      <i className=''><IoBedOutline /></i>
                      <span className=''>{beds} beds</span>
                    </p>
                    <p className='flex items-center gap-2 text-neutral-500'>
                      <i className=''><PiBathtubLight /></i>
                      <span className=''>{bathroom} baths</span>
                    </p>
                    <p className='flex items-center gap-2 text-neutral-500'>
                      <i className=''><LiaDoorOpenSolid /></i>
                      <span className=''>{bedroom} bedrooms</span>
                    </p>
                </div>
              </div>
    </>
  )
}

export default memo(MainInfo)
