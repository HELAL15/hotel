import React, { memo } from 'react'
import { twMerge } from 'tailwind-merge'

const Sorting = ({children , sx}) => {
  return (
    <div className={twMerge(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch gap-y-8 gap-x-5 md:gap-x-5 ${sx}`)}>
      {children}
    </div>
  )
}

export default memo(Sorting)
