import React, { memo, useContext, useEffect, useMemo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import Container from '../helpers/Container';
import Sorting from '../helpers/Sorting';
import { twMerge } from 'tailwind-merge';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { UserContext } from '../context/UserContext';
import { SettingContext } from '../context/SettingContext';
import { useTranslation } from 'react-i18next';
import useFetch from '../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { setSettings } from '../redux/features/settingSlice';





const Footer = () => {
  const token = sessionStorage.getItem("hotel");
  const { userDetails } = useContext(UserContext);
  const { data: fetchedSetting } = useFetch("setting");
  const memoizedSetting = useMemo(() => fetchedSetting, [fetchedSetting]);

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.value);
  const setting = useSelector((state) => state.setting.value);

  useEffect(() => {
    if (memoizedSetting) {
      dispatch(setSettings(memoizedSetting));
    }
  }, [memoizedSetting, dispatch]);

  const { t } = useTranslation();

  let data = setting?.data || null;

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





  return (
    <>
      <footer className='border-t border-t-slate-100 py-10 capitalize mt-6'>
        <Container>
          <Sorting sx={twMerge('grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 items-center')}>
            <div className='flex flex-row md:flex-col justify-between md:justify-start gap-4'>
              {/* <h3 className='text-black text-xl font-semibold mb-5'>logo</h3> */}
              <Link to='/' className='text-2xl font-bold text-gray-800  w-[100px]' title={site_name}>
                {
                  <img src={logo} alt={site_name} className='w-hull h-full object-contain' title={site_name}/>
                }
              </Link>
              <div className='flex flex-row md:flex-col gap-3'>
                <Link to={facebook} aria-label='facebook' target='_blank' className='flex items-center gap-1 nav-link'>
                  <i className='text-xl'><RiFacebookBoxLine/></i>
                  <span className='hidden md:block'>{t("social.facebook")}</span>
                </Link>
                <Link to={twitter} aria-label='twitter' target='_blank' className='flex items-center gap-1 nav-link'>
                  <i className='text-xl'><FaXTwitter/></i>
                  <span className='hidden md:block'>{t("social.twitter")}</span>
                </Link>
                <Link to={youtube} aria-label='youtube' target='_blank' className='flex items-center gap-1 nav-link'>
                  <i className='text-xl'><FiYoutube/></i>
                  <span className='hidden md:block'>{t("social.youtube")}</span>
                </Link>
                <Link to={instagram} aria-label='instagram' target='_blank' className='flex items-center gap-1 nav-link'>
                  <i className='text-xl'><FaInstagram/></i>
                  <span className='hidden md:block'>{t("social.instagram")}</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className='text-black text-xl font-semibold mb-5'>{t("footer.pages")}</h3>
              <div className='flex flex-col gap-3'>
                <NavLink to="/" className='nav-link'>{t("nav.home")}</NavLink>
                <NavLink to="/about" className='nav-link'>{t("nav.about")}</NavLink>
                <NavLink to="/services" className='nav-link'>{t("nav.services")}</NavLink>
                <NavLink to="/places" className='nav-link'>{t("nav.places")}</NavLink>
              </div>
            </div>
            <div>
              <h3 className='text-black text-xl font-semibold mb-5'>{t("footer.helps")}</h3>
              <div className='flex flex-col gap-3'>
                <NavLink to="/contact" className='nav-link'>{t("nav.contact")}</NavLink>
                <NavLink to="/terms" className='nav-link'>{t("nav.terms")}</NavLink>
                <NavLink to="/privacy" className='nav-link'>{t("nav.privacy")}</NavLink>
                {token && userDetails && <NavLink to="/profile" className='nav-link'>{t("nav.profile")}</NavLink>}
                {!token && !userDetails && <NavLink to="/login" className='nav-link'>{t("nav.login")}</NavLink>}
              </div>
            </div>
            
            <div className='md:col-span-3 lg:col-span-1'>
              <h3 className='text-black text-xl font-semibold mb-5'>{t("footer.contact")}</h3>
              <div className='flex flex-col gap-3'>
                <NavLink to={`tel:+${mobile}`} className='nav-link flex items-center gap-2'><i><FaPhoneAlt/></i><span>+{mobile}</span></NavLink>
                <NavLink to={`mailto:${email}`} className='nav-link flex items-center gap-2'><i><MdEmail/></i><span>{email}</span></NavLink>
                <NavLink to={lang === "ar" ? address_ar : address_en } className='nav-link flex items-center gap-2'><i><IoLocationSharp/></i><span>{lang === "ar" ? address_ar : address_en }</span></NavLink>
              </div>
            </div>
          </Sorting>
        </Container>
      </footer>
    </>
  )
}

export default memo(Footer)
