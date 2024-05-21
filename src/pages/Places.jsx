import React, { memo } from 'react'
import Container from '../helpers/Container'
import Sorting from '../helpers/Sorting'
import PlaceCard from '../components/PlaceCard'
import { twMerge } from 'tailwind-merge'

const Places = () => {
  return (
    <>
      <section className='mt-8'>
        <Container>
          <Sorting sx={twMerge("grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5")}>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
          </Sorting>
        </Container>
      </section>
    </>
  )
}

export default memo(Places)
