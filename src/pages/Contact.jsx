import React, { memo, useContext, useEffect } from 'react'
import Seo from '../helpers/Seo'
import {BookServiceContext} from '../context/BookServiceContext'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  const {test , a} = useContext(BookServiceContext)

  return (
    <>
      <Seo title="contact"  />
      <Newsletter/>
    </>
  )
}

export default memo(Contact)
