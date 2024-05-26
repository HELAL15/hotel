import React, { memo } from 'react'
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





const Footer = () => {
  return (
    <>
      <footer className='border-t border-t-slate-100 py-10 capitalize mt-6'>
        <Container>
          <Sorting sx={twMerge('grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4')}>
            <div className='flex flex-row md:flex-col justify-between md:justify-start gap-4'>
              {/* <h3 className='text-black text-xl font-semibold mb-5'>logo</h3> */}
              <Link to='/' className='text-2xl font-bold text-gray-800  w-fit'>
                <svg className="w-[100px] block " viewBox="0 0 65 32" fill="#4F46E5" xmlns="http://www.w3.org/2000/svg"><path d="M24.4444 14.0325C24.4444 21.4807 12.9444 29.3945 12.9444 29.3945C12.9444 29.3945 1.44444 21.4807 1.44444 14.0325C1.44444 7.51522 6.84722 2.39453 12.9444 2.39453C19.0417 2.39453 24.4444 7.51522 24.4444 14.0325Z" fill="currentColor"></path><path d="M12.9444 29.3945C12.9444 29.3945 24.4444 21.4807 24.4444 14.0325C24.4444 7.51522 19.0417 2.39453 12.9444 2.39453C6.84722 2.39453 1.44444 7.51522 1.44444 14.0325C1.44444 21.4807 12.9444 29.3945 12.9444 29.3945ZM12.9444 29.3945V2.6807" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="13" cy="15" r="4" fill="white"></circle><path d="M31.8601 25.2216C32.951 25.2216 33.897 24.3097 33.9055 23.1761C33.897 22.0597 32.951 21.1477 31.8601 21.1477C30.7351 21.1477 29.8061 22.0597 29.8146 23.1761C29.8061 24.3097 30.7351 25.2216 31.8601 25.2216ZM43.9261 11.9091H41.3267V11.0312C41.3267 10.1449 41.6847 9.625 42.75 9.625C43.1847 9.625 43.6278 9.71875 43.9176 9.8125L44.5568 7.08523C44.1051 6.94886 43.108 6.72727 41.9915 6.72727C39.5284 6.72727 37.696 8.11648 37.696 10.9631V11.9091H35.8466V14.6364H37.696V25H41.3267V14.6364H43.9261V11.9091ZM46.1442 25H49.7749V11.9091H46.1442V25ZM47.968 10.2216C49.0504 10.2216 49.9368 9.39489 49.9368 8.38068C49.9368 7.375 49.0504 6.54829 47.968 6.54829C46.8942 6.54829 46.0078 7.375 46.0078 8.38068C46.0078 9.39489 46.8942 10.2216 47.968 10.2216ZM63.5753 15.642C63.2514 13.2301 61.3082 11.7386 58.0014 11.7386C54.652 11.7386 52.4446 13.2898 52.4531 15.8125C52.4446 17.7727 53.6804 19.0426 56.2372 19.554L58.5043 20.0057C59.6463 20.2358 60.1662 20.6534 60.1832 21.3097C60.1662 22.0852 59.3224 22.6392 58.0526 22.6392C56.7571 22.6392 55.8963 22.0852 55.6747 21.0199L52.1037 21.2074C52.4446 23.7131 54.5753 25.2557 58.044 25.2557C61.4361 25.2557 63.8651 23.5256 63.8736 20.9432C63.8651 19.0511 62.6293 17.9176 60.0895 17.3977L57.7202 16.9205C56.5014 16.6562 56.0497 16.2386 56.0582 15.608C56.0497 14.8239 56.9361 14.3125 58.0611 14.3125C59.3224 14.3125 60.0724 15.0028 60.2514 15.8466L63.5753 15.642Z" fill="#1F2937"></path></svg>
              </Link>
              <div className='flex flex-row md:flex-col gap-3'>
                <Link to="" className='flex items-center gap-1 nav-link'>
                  <i className='text-xl'><RiFacebookBoxLine/></i>
                  <span className='hidden md:block'>facebook</span>
                </Link>
                <Link to="" className='flex items-center gap-1 nav-link'>
                  <i className='text-xl'><FaXTwitter/></i>
                  <span className='hidden md:block'>twitter</span>
                </Link>
                <Link to="" className='flex items-center gap-1 nav-link'>
                  <i className='text-xl'><FiYoutube/></i>
                  <span className='hidden md:block'>youtube</span>
                </Link>
                <Link to="" className='flex items-center gap-1 nav-link'>
                  <i className='text-xl'><FaInstagram/></i>
                  <span className='hidden md:block'>instagram</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className='text-black text-xl font-semibold mb-5'>helps</h3>
              <div className='flex flex-col gap-3'>
                <NavLink to="/contact" className='nav-link'>contact us</NavLink>
                <NavLink to="/terms" className='nav-link'>terms & conditions</NavLink>
                <NavLink to="/policy" className='nav-link'>privacy policy</NavLink>
                <NavLink to="/profile" className='nav-link'>profile</NavLink>
                <NavLink to="/login" className='nav-link'>login</NavLink>
              </div>
            </div>
            <div>
              <h3 className='text-black text-xl font-semibold mb-5'>pages</h3>
              <div className='flex flex-col gap-3'>
                <NavLink to="/" className='nav-link'>home</NavLink>
                <NavLink to="/about" className='nav-link'>about us</NavLink>
                <NavLink to="/services" className='nav-link'>services</NavLink>
                <NavLink to="/places" className='nav-link'>places</NavLink>
              </div>
            </div>
            <div className='md:col-span-3 lg:col-span-1'>
              <h3 className='text-black text-xl font-semibold mb-5'>contact</h3>
              <div className='flex flex-col gap-3'>
                <NavLink to="tel:+201222810589" className='nav-link flex items-center gap-2'><i><FaPhoneAlt/></i><span>+201222810589</span></NavLink>
                <NavLink to="mailto:1ahmedhelal1@gmail.com" className='nav-link flex items-center gap-2'><i><MdEmail/></i><span>1ahmedhelal@gmail.com</span></NavLink>
                <NavLink to="/bbb" className='nav-link flex items-center gap-2'><i><IoLocationSharp/></i><span>egypt , el gharbia , elmahalla elkubra</span></NavLink>
              </div>
            </div>
          </Sorting>
        </Container>
      </footer>
    </>
  )
}

export default memo(Footer)
