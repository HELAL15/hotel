import React, { memo, useContext, useEffect } from 'react';
import { DatePicker } from 'antd';
import { BookServiceContext } from '../../context/BookServiceContext';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const Datec = () => {
  const { setDate, setNights } = useContext(BookServiceContext);

  // Calculate default values for the date range using dayjs
  const defaultStartDate = dayjs();
  const defaultEndDate = dayjs().add(2, 'day');

  // setDate([defaultStartDate.format('YYYY-MM-DD'), defaultEndDate.format('YYYY-MM-DD')]);
  // const differenceInTime = defaultEndDate - defaultStartDate;
  // const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  // setNights(differenceInDays);

  const onChange = (date, dateString) => {
    setDate(dateString);
    if (date) {
      const [startDate, endDate] = date;
      const differenceInTime = endDate - startDate;
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setNights(differenceInDays);
    }
  };

  return (
    <RangePicker
      defaultValue={[defaultStartDate, defaultEndDate]}
      onChange={onChange}
      className="custom-range-picker"
    />
  );
};

export default memo(Datec);
