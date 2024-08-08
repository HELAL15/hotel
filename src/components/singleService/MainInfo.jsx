import React, { memo } from 'react'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa6'
import { CiUser } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { request } from '../../api/request';
import { toast } from 'react-toastify';
import { ConvertDecimel } from '../../helpers/ConvertDecimel';
import { useNavigate } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import { useTranslation } from 'react-i18next';

const MainInfo = ({
  title,
  rates,
  bathroom ,
  bedroom ,
  beds ,
  guests,
  type,
  id,
  setFav,
  fav,
  refetch ,
  loading
}) => {

  const navigate = useNavigate()

  const handleFav = () => {
    request.post(`/user/rooms/${id}/wishlist`)
      .then(res => {
        setFav(!fav);
        // refetch()
        toast.success(res.data.message);
      })
      .catch(error => {
        setFav(!fav);
        toast.error(error.response.data.message);
        navigate("/login")
      });
  };

  const {t} = useTranslation()


  return (
    <>
      <div className='mb-4 mt-0 rounded-[30px] border border-neutral-200 overflow-hidden p-4'>
                <div className='flex items-center justify-between gap-4'>
                  {
                    loading ? <Skeleton className=' px-6 rounded-[30px]' /> :
                    <span className='bg-primary/20 text-primary font-semibold capitalize px-3 rounded-[30px] text-sm'>{t(`selectType.${type}`)}</span>
                  }
                  {
                    loading ? <Skeleton className=' px-11 rounded-[30px]' /> :
                  <button className='flex items-center gap-2 px-3 rounded-md duration-300 hover:bg-slate-200' onClick={handleFav}>
                  <i className=''>{fav ? <FaHeart className='text-primary' /> : <FaRegHeart />}</i>
                    <span>{fav ? t("room.added") : t("room.wishlist")}</span>
                  </button>
                  }
                </div>
                {
                    loading ? <>
                        <Skeleton className=' px-6 rounded-[30px] my-5 py-1' />
                        <Skeleton className=' px-6 py-2 rounded-[30px] mb-2' width={100} />
                    </>:
                <div className='flex flex-col gap-4 my-4'>
                  <h2 className='text-3xl text-black capitalize'>{title}</h2>
                  <div className='flex items-center gap-8'>
                    <p className='flex items-center gap-2 rate '>
                      <i className='text-yellow-400'><FaStar /></i>
                      <span className='text-black'>{ConvertDecimel(rates)}</span>
                    </p>
                  </div>
                </div>
                  }
                <div className='flex items-center gap-4 md:gap-8 flex-wrap pt-5 border-t border-t-neutral-200 text-neutral-600 text-xl'>
                {
                    loading ? <>
                      <Skeleton className=' px-16 rounded-[30px]' />
                      <Skeleton className=' px-16 rounded-[30px]' />
                      <Skeleton className=' px-16 rounded-[30px]' />
                      <Skeleton className=' px-16 rounded-[30px]' />
                    </> :
                    <>
                    <p className='flex items-center gap-2 '>
                      <i className=''><CiUser /></i>
                      <span className=''>{guests} {guests === 1 ? t("room.guest") : t("room.guests") }</span>
                    </p>
                    <p className='flex items-center gap-2 '>
                      <i className=''><IoBedOutline /></i>
                      <span className=''>{beds} {beds === 1 ? t("room.bed") : t("room.beds") }</span>
                    </p>
                    <p className='flex items-center gap-2 '>
                      <i className=''><PiBathtubLight /></i>
                      <span className=''>{bathroom} {bathroom === 1 ? t("room.bath") : t("room.baths") }</span>
                    </p>
                    <p className='flex items-center gap-2 '>
                      <i className=''><LiaDoorOpenSolid /></i>
                      <span className=''>{bedroom} {bedroom === 1 ? t("room.bedroom") : t("room.bedrooms") }</span>
                    </p>
                    </>
                  }
                </div>
              </div>
    </>
  )
}

export default memo(MainInfo)
