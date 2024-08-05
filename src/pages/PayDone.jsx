import React, { memo } from 'react'
import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'

const PayDone = () => {

const {id} = useParams()

const {data} = useFetch(`/reservations/${id}`)

console.log(data?.data);


  return (
    <>
      <h1 className='text-3xl text-red text-center mt-10'>pay done</h1>
    </>
  )
}

export default memo(PayDone)
