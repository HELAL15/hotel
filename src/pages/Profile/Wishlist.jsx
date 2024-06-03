import React, { memo } from 'react'
import Seo from '../../helpers/Seo'
import Container from '../../helpers/Container'
import SecTitle from '../../components/SecTitle'
import Sorting from '../../helpers/Sorting'
import MainCard from '../../components/MainCard'

const Wishlist = () => {
  return (
    <>
      <Seo title="wishlist"  />
      <section className=''>
      <Container>
      <SecTitle 
          head="wishlist"
          />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
          <MainCard/>
          <MainCard sale/>
          <MainCard/>
        </div>
      </Container>
    </section>
    </>
  )
}

export default memo(Wishlist)
