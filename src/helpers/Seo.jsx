import React from 'react'
import { Helmet } from 'react-helmet'
import img from "../img/fav.svg"
import { useTranslation } from 'react-i18next'

const Seo = ({title , description , fav}) => {
  const {t} = useTranslation()
  return (
    <>
      <Helmet>
      <meta charset="utf-8" />
      <link rel="icon" type="image/x-icon" href={img}/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <title>{t(`seo.${title}`)}</title>
      </Helmet>
    </>
  )
}

export default Seo
