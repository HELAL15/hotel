import React, { memo, useContext, useEffect } from 'react';
import { DatePicker } from 'antd';
import { BookServiceContext } from '../../context/BookServiceContext';
import dayjs from 'dayjs';
import { useLocation } from 'react-router';

const { RangePicker } = DatePicker;

const Datec = () => {
  const { setDate, setNights } = useContext(BookServiceContext);
const location = useLocation()
  const onChange = (date, dateString) => {
    setDate(dateString);
    if (date) {
      const [startDate, endDate] = date;
      const differenceInTime = endDate - startDate;
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setNights(differenceInDays);
    }else{
      setNights(1);
    }
    if(!date){
      setNights(1);
    }
  };
useEffect(()=>{
  setNights(1);
},[location])
  return (
    <RangePicker
      onChange={onChange}
      className="custom-range-picker"
    />
  );
};

export default memo(Datec);
