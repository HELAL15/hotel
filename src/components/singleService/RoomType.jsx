import { Select, Space } from 'antd';
import React, { memo, useContext } from 'react';
import { BookServiceContext } from '../../context/BookServiceContext';

const RoomType = ({ room }) => {
  const { setMealP, setOption } = useContext(BookServiceContext);

  const options = () => {
    if (room && room.hotel_setting) {
      return room.hotel_setting.map((setting) => ({
        value: setting.value,
        label: setting.title,
      }));
    }
    return [];
  };

  const handleChange = (data, option) => {
    setOption(option.label);
    setMealP(data);
  };

  return (
    <>
      <Space wrap>
        <Select
          defaultValue="all"
          options={options()}
          onChange={handleChange}
        />
      </Space>
    </>
  );
};

export default memo(RoomType);
