import React from 'react'

const Input = ({type , name , req, value , handleChange , disabled , ...props}) => {
  return (
    <input 
      className='input'
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      required={req}
      disabled={disabled}
      {...props}
    />
  )
}

export default Input
