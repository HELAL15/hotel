import React, { memo, useContext, useEffect } from 'react'
import Seo from '../helpers/Seo'
import {BookServiceContext} from '../context/BookServiceContext'
import Newsletter from '../components/Newsletter'
import ContactForm from '../components/contactUs/ContactForm'
import Container from '../helpers/Container'
import { MdEmail, MdLocationPin } from 'react-icons/md'
import { FaInstagram, FaPhone, FaXTwitter } from 'react-icons/fa6'
import { RiFacebookBoxLine, RiGlobalFill } from 'react-icons/ri'
import { SettingContext } from '../context/SettingContext'
import { Link } from 'react-router-dom'
import { FiYoutube } from 'react-icons/fi'
import StyledAnim from '../components/StyledAnim'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  
  const setting = useSelector((state) => state.setting.value);

  let data = setting?.data || null

  const {
    logo ,
    site_name,
    email,
    mobile,
    address_ar,
    address_en,
    facebook_link:facebook,
    twitter_link:twitter,
    youtube_link:youtube,
    instagram_link:instagram
  } = data || {} ;


const {t} = useTranslation()

  const lang = useSelector((state) => state.lang.value)

  return (
    <>
      <Seo title="contact"  />

      <section className='mt-6 mb-20 relative'>
      <StyledAnim/>
        <Container>
          <h2 className='text-xl md:text-2xl font-semibold text-center mt-10 mb-8'>{t("contact.head")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] items-center relative z-20">
            <div className='flex flex-col gap-6'>
              <div className='item'>
                <div className="flex items-center gap-2 text-black text-lg font-semibold">
                  <MdLocationPin className='text-primary' />
                  <span className=''>{t("contact.address")}</span>
                </div>
                <p className='text-base mt-2'>{lang === "ar" ? address_ar : address_en }</p>
              </div>
              <div className='item'>
                <div className="flex items-center gap-2 text-black text-lg font-semibold">
                  <MdEmail className='text-primary' />
                  <span className=''>{t("contact.email")}</span>
                </div>
                <Link to={`mailto:${email}`} className='text-base mt-2'>{email}</Link>
              </div>
              <div className='item'>
                <div className="flex items-center gap-2 text-black text-lg font-semibold">
                  <FaPhone className='text-primary' />
                  <span className=''>{t("contact.mobile")}</span>
                </div>
                <Link to={`tel:+${mobile}`} className='text-base mt-2'>{mobile}</Link>
              </div>
              <div className='item'>
                <div className="flex items-center gap-2 text-black text-lg font-semibold">
                  <RiGlobalFill className='text-primary' />
                  <span className=''>{t("contact.socials")}</span>
                </div>
                <div className='text-xl flex items-center gap-3 mr-2 ltr:mr-0 ltr:ml-2 mt-4'>
                  <Link to={facebook} aria-label='facebook' target="_blank" className='hover:text-primary duration-300'>
                  <RiFacebookBoxLine className='text-3xl'/>
                  </Link>
                  <Link to={twitter} aria-label='twitter' target="_blank" className='hover:text-primary duration-300'>
                  <FaXTwitter className='text-3xl'/>
                  </Link>
                  <Link to={youtube} aria-label='youtube' target="_blank" className='hover:text-primary duration-300'>
                  <FiYoutube className='text-3xl'/>
                  </Link>
                  <Link to={instagram} aria-label='instagram' target="_blank" className='hover:text-primary duration-300'>
                  <FaInstagram className='text-3xl'/>
                  </Link>
                </div>
              </div>
            </div>
            <ContactForm/>
          </div>
        </Container>
      </section>






      <Newsletter/>
    </>
  )
}

export default memo(Contact)
