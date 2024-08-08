import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const Seo = ({title , description , fav}) => {
  const {t} = useTranslation()
  const setting = useSelector((state)=>state.setting.value)
  const {favicon} = setting?.data || {}
  return (
    <>
      <Helmet>
      <meta charset="utf-8" />
      <link rel="icon" type="image/x-icon" href={favicon}/>
      <meta name="description" content={description || "Riviera resort is placed to host you" } />
      <title>{title !== undefined ? t(`seo.${title}`) : 'Riviera'}</title>
      </Helmet>
    </>
  )
}

export default Seo
