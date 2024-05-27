import React, { memo, useContext } from 'react'
import { DatePicker, Space } from 'antd';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { BookServiceContext } from '../../context/BookServiceContext';



const { RangePicker } = DatePicker;
const Datec = () => {
  
  const {setDate} = useContext(BookServiceContext)

  const onChange = (date, dateString) => {
    console.log( dateString);
    setDate(dateString)
  };
  
  return (
    <>

    <RangePicker onChange={onChange} className="custom-range-picker" />
    </>
  )
}

export default memo(Datec)
