import React, { memo } from 'react'
import Seo from '../../helpers/Seo'
import Container from '../../helpers/Container'
import SecTitle from '../../components/SecTitle'
import Sorting from '../../helpers/Sorting'
import MainCard from '../../components/MainCard'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const BookList = () => {

  const pageVariants = {
    initial: {
      opacity: 0,
      // x: "-100vw"
    },
    in: {
      opacity: 1,
      // x: 0
    },
    out: {
      opacity: 0,
      // x: "100vw"
    }
  };
  
  const pageTransition = {
    type: "spring",
    duration: 0.5
  };


  return (
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    >
      <Seo title="booklist"  />
          <section className=''>
      <Container>
      <SecTitle 
          head="booking list"
          />
          <span>test</span>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
          <MainCard/>
          <MainCard sale/>
          <MainCard/>
        </div>
      </Container>
    </section>
    </motion.div>
  )
}

export default memo(BookList)
