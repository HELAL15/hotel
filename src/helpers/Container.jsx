

/**
 * sx => for classes
 * children => for insert elements inside it
 */

import React, { memo } from 'react'

const Container = ({children  , sx=''}) => {
  return (
    <>
      <div className={`container ${sx}`}>{children}</div>
    </>
  )
}

export default memo(Container)
