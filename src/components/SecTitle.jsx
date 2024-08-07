import React from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

const SecTitle = ({head , body , sx}) => {

  const {t} = useTranslation()


  return (
    <>
      <div className={twMerge(`text-center md:text-right ltr:md:text-left mb-10 ${sx}`)}>
        <h2 className='text-xl md:text-2xl font-semibold mb-1 md:mb-2'>{t(head)}</h2>
        <p className='text-neutral-500 text-lg md:text-xl md:max-w-[600px]'>{t(body)}</p>
      </div>
    </>
  )
}

export default SecTitle
