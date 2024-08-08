import React, { memo, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { toast } from 'react-toastify';
import { Flex, Pagination, Rate, Spin } from "antd";
import Review from './Review';
import { request } from '../../api/request';
import { useNavigate, useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Reviews = ({ load }) => {
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [value, setValue] = useState(3);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [revs, setRevs] = useState([]);
  
  const { id } = useParams();
  const { data: reviews, refetch } = useFetch(`/rooms/${id}/reviews?page=${page}`);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const token = localStorage.getItem("hotel")
const {userDetails} = useContext(UserContext)


useEffect(()=>{
  refetch()
},[page])


  useEffect(() => {
    if (reviews?.data.data) {
      setRevs(reviews.data.data);
    }
  }, [reviews]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('rate', value);
    formData.append('review', data.review);
    setLoading(true);

    request.post(`user/rooms/${id}/review`, formData)
      .then((res) => {
        refetch();
        setLoading(false);
        toast.success(res.data.message);
        reset();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setLoading(false);
        if (error.response.status === 401) {
          navigate("/login");
        }
      });
  };


  const {t} = useTranslation()


  return (
    <div className='my-4 rounded-[30px] border border-neutral-200 overflow-hidden p-4'>
      <h2 className='text-2xl font-semibold pb-4 relative border-b border-b-neutral-200 w-fit'>
        {t("room.reviews")} {`(${reviews?.data.meta.total} ${reviews?.data.meta.total === 1 ? t("room.revCount") : t("room.revCounts") })`}
      </h2>
      <Flex direction="vertical" align="center" className='mt-5'>
        <Rate tooltips={desc} onChange={setValue} value={value} />
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full relative z-10'>
        <div className="my-4">
          <div className='package-input'>
            <span><i className="fas fa-envelope"></i></span>
            <textarea rows={5} className={twMerge('input py-5 h-auto')} {...register('review', { required: true })} placeholder={t("room.addRev")} />
          </div>
          {errors.review && <p className='text-danger'>{t("room.valid")}</p>}
        </div>
        {
          userDetails && token ?  
          <button type="submit" className="btn btn-primary w-full mt-2">
          {loading ? <Spin /> : t("room.addReview")}
          </button> :
          <Link className='btn btn-primary w-full block text-center' to='/login' >{t("room.login")}</Link>
        }
      </form>
      <div className='reviews mt-8'>
        {revs.map((review) => (
          <Review key={review.id} reviews={review} loading={load} />
        ))}
      </div>
      <div className='flex justify-center gap-4 mt-4'>
        <Pagination
          current={page}
          total={reviews?.data.meta.total}
          pageSize={reviews?.data.meta.per_page}
          onChange={(page) => setPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default memo(Reviews);
