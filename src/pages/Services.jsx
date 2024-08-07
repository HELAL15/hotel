import React, { memo, useState } from 'react';
import Container from '../helpers/Container';
import Sorting from '../helpers/Sorting';
import MainCard from '../components/MainCard';
import Seo from '../helpers/Seo';
import useFetch from '../hooks/useFetch';
import { Empty, Pagination, Select } from 'antd';
import Skeleton from 'react-loading-skeleton';
import { useLocation } from 'react-router';
import { TbFilterSearch } from "react-icons/tb";
import Filter from '../components/singleService/Filter';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/features/filterSlice';
import { useTranslation } from 'react-i18next';
import Newsletter from '../components/Newsletter';

const Services = () => {
  const [noGuests, setNoGuests] = useState("");
  const [current, setCurrent] = useState(1);
  const location = useLocation();

  const searchParam = new URLSearchParams(location.search);

  const fromPrice = searchParam.get('from_price');
  const toPrice = searchParam.get('to_price');
  const type = searchParam.get('type');
  const noGuest = searchParam.get("no_guests");


  const { data, isLoading } = useFetch(`/rooms?${noGuest ? `no_guests=${noGuest}` : ''}&page=${current}${type ? `&type=${type}` : ''}${fromPrice ? `&from_price=${fromPrice}` : ''}${toPrice ? `&to_price=${toPrice}` : ''}`, [noGuest, current]);
  const rooms = data?.data.data || [];
  const totalRooms = data?.data.meta.total || 0;

  const handlePaginationChange = (page) => {
    setCurrent(page);
  };

  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(setFilter(true));
  };

  const {t} = useTranslation()

  return (
    <>
      <Seo title="services" description='hilton hotel is placed to host you , here you will find all our rooms enjoy experience' />
      <Filter/>
      <section className='mt-8'>
        <Container>
          <div className='flex items-center justify-between gap-4 flex-wrap mb-6'>
            <h3 className='text-lg md:text-2xl capitalize font-semibold'>
              {t("rooms.head")} (<span className='text-primary'>{totalRooms}</span>)
            </h3>
            <button onClick={handleOpen} className='flex items-center gap-2 duration-500 '>
              <TbFilterSearch />
              <p>{t("rooms.filteration")}</p>
            </button>
          </div>
          <Sorting sx=''>
            {isLoading ? (
              <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full col-span-4 my-1'>
                {[...Array(8)].map((_, index) => (
                  <div key={index}>
                    <Skeleton height={200} />
                    <Skeleton width={100} />
                    <Skeleton count={2} />
                  </div>
                ))}
              </div>
            ) : (
              rooms.length > 0 ? (
                rooms.map((room) => <MainCard key={room.id} room={room} />)
              ) : (
                <Empty className='col-span-4 my-8' />
              )
            )}
          </Sorting>
          <Pagination
            direction={"ltr"}
            className='mt-10'
            current={current}
            total={totalRooms}
            pageSize={data?.data.meta.per_page}
            onChange={handlePaginationChange}
          />
        </Container>
      </section>

      <Newsletter/>


    </>
  );
};

export default memo(Services);
