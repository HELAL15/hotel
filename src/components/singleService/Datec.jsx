import React, { memo, useContext } from 'react'
import { DatePicker } from 'antd';
import { BookServiceContext } from '../../context/BookServiceContext';

const { RangePicker } = DatePicker;
const Datec = () => {
  const { setDate, setNights } = useContext(BookServiceContext)

  const onChange = (date, dateString) => {
    setDate(dateString)
    if (date) {
      const [startDate, endDate] = date;
      const differenceInTime = endDate - startDate;
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setNights(differenceInDays)
    }
  };

  return (
    <RangePicker onChange={onChange} className="custom-range-picker" />
  )
}

export default memo(Datec)
