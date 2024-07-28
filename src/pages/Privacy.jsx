import React from 'react'
import Container from '../helpers/Container'
import { useSelector } from 'react-redux';



const Privacy = () => {

  const setting = useSelector((state) => state.setting.value);

  const privacy = setting?.data.privacy_ar


  return (
    <>
      <section className='mt-10'>
        <Container>
          <h2 className='text-3xl pb-8 font-bold text-center lg:text-left rtl:lg:text-right'>سياسة الخصوصية</h2>
          <ul>
            {privacy}
          </ul>
        </Container>
      </section>
    </>
  )
}

export default Privacy
