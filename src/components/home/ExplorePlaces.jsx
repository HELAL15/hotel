import React from 'react'
import Container from '../../helpers/Container'
import ExplorePlace from '../ExplorePlace'

const ExplorePlaces = () => {
  return (
    <>
          <section>
      <Container>
        <div className='grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
          <ExplorePlace/>
          <ExplorePlace/>
          <ExplorePlace/>
          <ExplorePlace/>
          <ExplorePlace/>
          <ExplorePlace/>
          <ExplorePlace/>
          <ExplorePlace/>
        </div>
      </Container>
    </section>
    </>
  )
}

export default ExplorePlaces
