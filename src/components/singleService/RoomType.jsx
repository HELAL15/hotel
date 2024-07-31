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

  const handleChange = (data, Option) => {
    setOption(Option.children);
    setMealP(data);
  };
const {Option} = Select
  return (
    <>
      <Space wrap>
        <Select
          defaultValue=""
          onChange={handleChange}
        >
          <Option value="" disabled>choose your day meals</Option>
          {
            room?.hotel_setting?.map((setting) => (
              <Option key={setting.id} value={setting.value}>
                {setting.title}
              </Option>
            ))
          }
        </Select>
      </Space>
    </>
  );
};

export default memo(RoomType);
