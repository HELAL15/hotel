import React, { useContext } from 'react'
import { SettingContext } from '../context/SettingContext'
import Container from '../helpers/Container'
import { IoFastFoodSharp } from 'react-icons/io5'
import { CgGym } from "react-icons/cg";
import { SiHiltonhotelsandresorts } from "react-icons/si";
import { MdBedroomParent, MdDiscount, MdOutlinePets } from 'react-icons/md';
import { TbFreeRights } from "react-icons/tb";
import { FaComputer } from 'react-icons/fa6';


const Privacy = () => {

  const {memoizedSetting} = useContext(SettingContext)

  const privacy = memoizedSetting?.data.privacy_ar

  console.log(memoizedSetting);

  return (
    <>
      <section className='mt-10'>
        <Container>
          <h2 className='text-3xl pb-8 font-bold text-center lg:text-left rtl:lg:text-right'>سياسة الخصوصية</h2>
          <ul>
            {privacy}
            <IoFastFoodSharp />
            <CgGym />
            <SiHiltonhotelsandresorts />
            <MdOutlinePets />
            <MdDiscount />
            <TbFreeRights />
            <MdBedroomParent />
            <FaComputer />





          </ul>
        </Container>
      </section>
    </>
  )
}

export default Privacy
