import React, { memo } from 'react'
import { DatePicker, Space } from 'antd';
import { addDays } from 'date-fns';
import { useState } from 'react';



const { RangePicker } = DatePicker;
const Datec = () => {
  const onChange = (date, dateString) => {
    console.log( dateString);
  };
  
  return (
    <>

    <RangePicker onChange={onChange} className="custom-range-picker" />
    </>
  )
}

export default memo(Datec)
