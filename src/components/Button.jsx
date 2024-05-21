
/**
 * custom react component {button} 
 * styles = tailwind
 * 
 * usage \\ import it 
 */


import React from 'react'

const Button = ({variant , content , icon , isLoading , disabled }) => {
  return (
    <button className={`btn ${variant}`} disabled={disabled}>
      isLoading ? <span>Loading...</span> :
      <span>{content}</span>
      {icon && <i>icon</i>}
    </button>
  )
}

export default Button
