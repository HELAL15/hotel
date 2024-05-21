import React, { memo } from 'react'
import { Select, Space } from 'antd';

const Currency = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
              <Space wrap>
    <Select className=''
      defaultValue="currency"
      style={{
        width: 100,
        outline: 'none',
        border: 'none',
        boxShadow: 'none',
        background: 'transparent'
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />

  </Space>
    </>
  )
}

export default memo(Currency)
