import React, { memo} from 'react'
import Container from '../../helpers/Container'
import SecTitle from '../SecTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PlaceCard from '../PlaceCard'
import { useSelector } from 'react-redux';

const Suggestion = () => {
  const lang = useSelector((state) => state.lang.value);
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  return (
    <>
          <section className=''>
      <Container>
        <SecTitle 
          head="Suggestions for discovery"
          body="Popular places to recommends for you"
          />
                <Swiper
                className='h-full w-full'
                modules={[Navigation]}
                // spaceBetween={50}
                // slidesPerView={5}
                dir={dir}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                  // when window width is <= 625px
                  625: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when window width is <= 768px
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  // when window width is <= 1024px
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  // when window width is <= 1024px
                  1444: {
                    slidesPerView: 5,
                    spaceBetween: 35,
                  },
                }}
              >
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
                <SwiperSlide>
                  <PlaceCard/>
                </SwiperSlide>
          </Swiper>
      </Container>
    </section>
    </>
  )
}

export default memo(Suggestion)
