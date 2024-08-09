import React, { memo} from 'react'
import Container from '../../helpers/Container'
import SecTitle from '../SecTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import PlaceCard from '../PlaceCard'
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import Skeleton from 'react-loading-skeleton';
import { Empty } from 'antd';
import MainCard from '../MainCard';

const Suggestion = () => {
  const lang = useSelector((state) => state.lang.value);
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const {data , isLoading} = useFetch("/rooms?in_suggest=1")


const cards = data?.data?.data || {}

  return (
    <>
          <section className=''>
      <Container>
        <SecTitle 
          head="suggestions.head"
          body="suggestions.body"
          />
                <Swiper
                className='h-full w-full suggest-swiper'
                modules={[Navigation , Autoplay , Pagination]}
                spaceBetween={20}
                // slidesPerView={5}
                dir={dir}

                loop
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                  // when window width is <= 625px
                  625: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  // when window width is <= 768px
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                  // when window width is <= 1024px
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                  },
                  // when window width is <= 1024px
                  1444: {
                    slidesPerView: 5,
                    spaceBetween: 16,
                  },
                }}
              >
              {
                cards?.length > 0 ?
                cards.map((card, index) => (
                  <SwiperSlide key={index} className='suggest-slide' >
                    <MainCard room={card} />
                  </SwiperSlide>
                ))
                : isLoading ? 
                [...Array(8)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <Skeleton height={200} />
                      <Skeleton width={100} />
                      <Skeleton count={2} />
                    </div>
                  </SwiperSlide>
                )) :
                <Empty/>
              }


          </Swiper>
      </Container>
    </section>
    </>
  )
}

export default memo(Suggestion)
