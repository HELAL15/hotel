import React, { memo, useEffect } from 'react'
import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'
import NotFound from './NotFound'

const PayDone = () => {

const {id} = useParams()

const {data , response} = useFetch(`user/reservations/${id}`)

console.log(data?.data);
console.log(data?.status);


useEffect(() => {
  if (response?.ok) {
    localStorage.removeItem("reservationId");
  }
}, [response]);

// get reservation id
const reserveId = localStorage.getItem("reservationId")
  if(id !== reserveId ) {
    return <NotFound/>
  }


  return (
    <>
      <h1 className='text-3xl text-red text-center mt-10'>pay done</h1>
    </>
  )
}

export default memo(PayDone)
