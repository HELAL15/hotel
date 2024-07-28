import React, { memo, useEffect, useState } from 'react';
import Container from '../helpers/Container';
import Sorting from '../helpers/Sorting';
import MainCard from '../components/MainCard';
import Seo from '../helpers/Seo';
import useFetch from '../hooks/useFetch';
import { Empty, Pagination, Select } from 'antd';
import Loader from '../layouts/Loader';
import Skeleton from 'react-loading-skeleton';

const Services = () => {
  const [noGuests, setNoGuests] = useState("");
  const [current, setCurrent] = useState(1);

  const { data, isLoading } = useFetch(`/rooms?no_guests=${noGuests}&page=${current}` , [noGuests, current]);
  const rooms = data?.data.data || [];
  const totalRooms = data?.data.meta.total || 0;

  const handleChange = (value) => {
    setNoGuests(value || "");
  };
  const handlePaginationChange = (page) => {
    setCurrent(page);
  };


  return (
    <>
      <Seo title="Services" />
      <section className='mt-8'>
        <Container>
          <div className='flex items-center justify-between gap-4 flex-wrap mb-6'>
            <h3 className='text-lg md:text-2xl capitalize font-semibold'>
              Rooms (<span className='text-primary'>{totalRooms}</span>)
            </h3>
            <div className='flex items-center gap-4 '>
              <p className='text-base'>Filter by Guests</p>
              <Select
                defaultValue=""
                style={{ width: 90 }}
                onChange={handleChange}
                options={[
                  { value: '', label: 'All' },
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                  { value: '3', label: '3' },
                  { value: '4', label: '4' },
                ]}
              />
            </div>
          </div>
          <Sorting sx=''>
            {isLoading ? (
              <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full col-span-4 my-8'>
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
    </>
  );
};

export default memo(Services);
