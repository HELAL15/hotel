import React, { memo, useContext, useEffect } from 'react'
import Seo from '../helpers/Seo'
import {BookServiceContext} from '../context/BookServiceContext'

const Contact = () => {
  const {test , a} = useContext(BookServiceContext)

  return (
    <>
      <Seo title="contact"  />
      <button onClick={test}>test</button>
      <span>{a}</span>
    </>
  )
}

export default memo(Contact)
