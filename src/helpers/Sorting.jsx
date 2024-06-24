import React, { memo } from 'react'
import { twMerge } from 'tailwind-merge'

const Sorting = ({children , sx}) => {
  return (
    <div className={twMerge(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 ${sx}`)}>
      {children}
    </div>
  )
}

export default memo(Sorting)
