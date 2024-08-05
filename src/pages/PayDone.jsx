import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams should be imported from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import NotFound from './NotFound';

const PayDone = () => {
  const { id } = useParams();

  const { data, response, isLoading, error } = useFetch(`user/reservations/${id}`);

  useEffect(() => {
    if (data?.status === 'completed') {
      localStorage.removeItem('reservationId');
    }
  }, [data]);

  const reserveId = localStorage.getItem('reservationId');

  // Render NotFound if the reservation ID doesn't match
  if (id !== reserveId) {
    return <NotFound />;
  }

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error loading reservation data.</div>;
  }

  return (
    <>
      <h1 className='text-3xl text-red text-center mt-10'>pay done</h1>
    </>
  );
};

export default memo(PayDone);
