import React, {memo} from 'react'
import Container from '../../helpers/Container'
import { twMerge } from 'tailwind-merge'
import { Link, useNavigate } from 'react-router-dom'
import StyledAnim from '../StyledAnim'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { CiSearch } from 'react-icons/ci'
import { Select  } from 'antd'
import { useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch'
const { Option } = Select;
const Hero = () => {
  const {t} = useTranslation()
  const lang = useSelector((state) => state.lang.value);
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const setting = useSelector((state)=> state.setting.value)
  const handleChange= (data)=>{
    console.log(data);
  }

  const {data} = useFetch('about-slider' , [lang])
const heroData = data?.data[0] 

const {
  title,
  description,
} = heroData || {}

const navigate = useNavigate()

const handleSearch = (e) =>{
    e.preventDefault()
    console.log('searching');
    navigate("/rooms?type=poop_view&from_price=100&to_price=5000&no_guests=5")
}

  
  return (
    <>
      <section className=' py-10  relative'>
        <StyledAnim/>
        <Container sx='relative z-10 h-full'>
          <div className={twMerge('h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 items-center')}>
            <div className=''>
              <img className='w-[110px] md:w-[200px] block mb-4 object-contain' src={setting?.data.logo} alt={setting?.data.site_name} />
              <h1 className='text-2xl md:text-3xl lg:text-5xl text-black capitalize font-semibold leading-6 '>{title}</h1>
              <p className='text-neutral-500 my-4 md:my-8 text-base md:text-lg'>{description}</p>
              <Link to="/listing-stay-map" className='btn btn-primary'>start your search</Link>
            </div>
            <div className='hidden md:block h-full'>
                <Swiper
                  className='h-full w-full rounded-3xl hidden'
                  modules={[ Pagination , Autoplay]}
                  dir={dir}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  loop
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                    >

                    {
                      heroData?.icon.map((icon)=>{
                        return (
                          <SwiperSlide className='h-full w-full' key={icon.id}>
                            <div className='w-full h-full relative'>
                              <span className='overlay absolute top-0 left-0 bg-black/20 w-full h-full'></span>
                              <img src={icon.url} className='w-full h-full object-cover' />
                            </div>
                          </SwiperSlide>
                        )
                      })
                    }
            </Swiper>
            </div>
          </div>
          <div className='mt-10'>
            <h4 className=' mx-4 text-lg font-semibold mb-1'>quick search</h4>
          <form onSubmit={handleSearch} className='mt-8 shadow-md grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center p-4 bg-white rounded-2xl md:divide md:divide-x-2  rtl:md:divide-x-reverse'>
              <div className='flex items-center justify-center flex-col'>
              <p className='text-start mb-2 font-medium'>price</p>
              <Select defaultValue="price" onChange={handleChange}>
                <Option value="price" disabled>price</Option>
                <Option value="jack">100$</Option>
                <Option value="lucy">200$</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              </div>
              <div className='flex items-center justify-center flex-col'>
              <p className='text-start mb-2 font-medium'>guests</p>
              <Select defaultValue="price" onChange={handleChange}>
                <Option value="price" disabled>guests number</Option>
                <Option value="jack">1 guest</Option>
                <Option value="lucy">2 guests</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              </div>
              <div className='flex items-center justify-center flex-col'>
              <p className='text-start mb-2 font-medium'>type</p>
              <Select defaultValue="price" onChange={handleChange}>
                <Option value="price" disabled>type</Option>
                <Option value="jack">room</Option>
                <Option value="lucy">suite</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              </div>
              <div className='flex items-center justify-center'>
                <button className='grid place-items-center w-[50px] h-[50px] bg-primary text-white text-2xl rounded-full font-bold'>
                  <CiSearch />
                </button>
              </div>
          </form>
          </div>
        </Container>
      </section>
      {/* <section className='hero bg-cover bg-no-repeat relative '>
      <Swiper
                  className='h-full w-full'
                  modules={[ Pagination , Autoplay]}
                  dir={dir}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  loop
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                    >
                 <SwiperSlide className='h-full w-full'>
                    <div className='w-full h-full relative'>
                      <span className='overlay absolute top-0 left-0 bg-black/30 w-full h-full'></span>
                      <img src='https://chisfis-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1268871%2Fpexels-photo-1268871.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&w=1080&q=75' className='w-full h-full object-cover' />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className='h-full w-full'>
                    <div className='w-full h-full relative'>
                      <span className='overlay absolute top-0 left-0 bg-black/30 w-full h-full'></span>
                      <img src='https://chisfis-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2290738%2Fpexels-photo-2290738.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&w=1080&q=75' className='w-full h-full object-cover' />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className='h-full w-full'>
                    <div className='w-full h-full relative'>
                      <span className='overlay absolute top-0 left-0 bg-black/30 w-full h-full'></span>
                      <img src='https://chisfis-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2290738%2Fpexels-photo-2290738.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&w=1080&q=75' className='w-full h-full object-cover' />
                    </div>
                  </SwiperSlide>

            </Swiper>

            <div className=' w-[90%] md:w-[70%] lg:w-[50%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-10 z-20 text-center'>
              <h1 className='text-5xl text-white capitalize font-semibold'>{t("hero.head")}</h1>
              <p className=' text-slate-200 my-8 text-xl'>{t("hero.subhead")}</p>
            </div>
      </section> */}

      {/* <section className=' '>
      <StyledAnim />
        <Container sx='relative z-10'>
          <div className={twMerge('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 items-center')}>
            <div className=''>
              <i className='text-2xl font-bold text-gray-800 mb-4'>
                <svg className="w-[200px] block mb-4" viewBox="0 0 65 32" fill="#4F46E5" xmlns="http://www.w3.org/2000/svg"><path d="M24.4444 14.0325C24.4444 21.4807 12.9444 29.3945 12.9444 29.3945C12.9444 29.3945 1.44444 21.4807 1.44444 14.0325C1.44444 7.51522 6.84722 2.39453 12.9444 2.39453C19.0417 2.39453 24.4444 7.51522 24.4444 14.0325Z" fill="currentColor"></path><path d="M12.9444 29.3945C12.9444 29.3945 24.4444 21.4807 24.4444 14.0325C24.4444 7.51522 19.0417 2.39453 12.9444 2.39453C6.84722 2.39453 1.44444 7.51522 1.44444 14.0325C1.44444 21.4807 12.9444 29.3945 12.9444 29.3945ZM12.9444 29.3945V2.6807" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="13" cy="15" r="4" fill="white"></circle><path d="M31.8601 25.2216C32.951 25.2216 33.897 24.3097 33.9055 23.1761C33.897 22.0597 32.951 21.1477 31.8601 21.1477C30.7351 21.1477 29.8061 22.0597 29.8146 23.1761C29.8061 24.3097 30.7351 25.2216 31.8601 25.2216ZM43.9261 11.9091H41.3267V11.0312C41.3267 10.1449 41.6847 9.625 42.75 9.625C43.1847 9.625 43.6278 9.71875 43.9176 9.8125L44.5568 7.08523C44.1051 6.94886 43.108 6.72727 41.9915 6.72727C39.5284 6.72727 37.696 8.11648 37.696 10.9631V11.9091H35.8466V14.6364H37.696V25H41.3267V14.6364H43.9261V11.9091ZM46.1442 25H49.7749V11.9091H46.1442V25ZM47.968 10.2216C49.0504 10.2216 49.9368 9.39489 49.9368 8.38068C49.9368 7.375 49.0504 6.54829 47.968 6.54829C46.8942 6.54829 46.0078 7.375 46.0078 8.38068C46.0078 9.39489 46.8942 10.2216 47.968 10.2216ZM63.5753 15.642C63.2514 13.2301 61.3082 11.7386 58.0014 11.7386C54.652 11.7386 52.4446 13.2898 52.4531 15.8125C52.4446 17.7727 53.6804 19.0426 56.2372 19.554L58.5043 20.0057C59.6463 20.2358 60.1662 20.6534 60.1832 21.3097C60.1662 22.0852 59.3224 22.6392 58.0526 22.6392C56.7571 22.6392 55.8963 22.0852 55.6747 21.0199L52.1037 21.2074C52.4446 23.7131 54.5753 25.2557 58.044 25.2557C61.4361 25.2557 63.8651 23.5256 63.8736 20.9432C63.8651 19.0511 62.6293 17.9176 60.0895 17.3977L57.7202 16.9205C56.5014 16.6562 56.0497 16.2386 56.0582 15.608C56.0497 14.8239 56.9361 14.3125 58.0611 14.3125C59.3224 14.3125 60.0724 15.0028 60.2514 15.8466L63.5753 15.642Z" fill="#1F2937"></path></svg>
              </i>
              <h1 className='text-5xl text-black capitalize font-semibold'>{t("hero.head")}</h1>
              <p className='text-neutral-500 my-8 text-xl'>{t("hero.subhead")}</p>
              <Link to="/listing-stay-map" className='btn btn-primary'>start your search</Link>
            </div>
            <div className='grid grid-cols-2 gap-6'>
              <div className='grid grid-cols-1 gap-6 pt-8'>
                <img src={img3} alt='hero' className='h-full w-full object-cover' loading='lazy' />
                <img src={img2} alt='hero' className='h-full w-full object-cover' loading='lazy' />
              </div>
              <div className='row-span-2 pt-20'><img src={img1} alt='hero' className='h-full w-full object-cover' loading='lazy' /></div>
            </div>
          </div>
        </Container>
      </section> */}

      {/* <section className='hero relative'>
        <Swiper
              className='h-full w-full'
              modules={[ Pagination , Autoplay]}
              dir={dir}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              loop
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
                >
              <SwiperSlide className='h-full w-full'>
                <div className='w-full h-full relative'>
                  <span className='overlay absolute top-0 left-0 bg-black/20 w-full h-full'></span>
                  <img src='https://chisfis-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1268871%2Fpexels-photo-1268871.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&w=1080&q=75' className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>

              <SwiperSlide className='h-full w-full'>
                <div className='w-full h-full relative'>
                  <span className='overlay absolute top-0 left-0 bg-black/20 w-full h-full'></span>
                  <img src='https://chisfis-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2290738%2Fpexels-photo-2290738.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&w=1080&q=75' className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>

              <SwiperSlide className='h-full w-full'>
                <div className='w-full h-full relative'>
                  <span className='overlay absolute top-0 left-0 bg-black/20 w-full h-full'></span>
                  <img src='https://chisfis-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2290738%2Fpexels-photo-2290738.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&w=1080&q=75' className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>

        </Swiper>
        <div className='intro  m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20  '>
          <div className='bg-white/70 p-4 rounded-2xl'>
            <i className='text-2xl font-bold text-gray-800 mb-4'>
              <svg className="w-[200px] block mb-4" viewBox="0 0 65 32" fill="#4F46E5" xmlns="http://www.w3.org/2000/svg"><path d="M24.4444 14.0325C24.4444 21.4807 12.9444 29.3945 12.9444 29.3945C12.9444 29.3945 1.44444 21.4807 1.44444 14.0325C1.44444 7.51522 6.84722 2.39453 12.9444 2.39453C19.0417 2.39453 24.4444 7.51522 24.4444 14.0325Z" fill="currentColor"></path><path d="M12.9444 29.3945C12.9444 29.3945 24.4444 21.4807 24.4444 14.0325C24.4444 7.51522 19.0417 2.39453 12.9444 2.39453C6.84722 2.39453 1.44444 7.51522 1.44444 14.0325C1.44444 21.4807 12.9444 29.3945 12.9444 29.3945ZM12.9444 29.3945V2.6807" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="13" cy="15" r="4" fill="white"></circle><path d="M31.8601 25.2216C32.951 25.2216 33.897 24.3097 33.9055 23.1761C33.897 22.0597 32.951 21.1477 31.8601 21.1477C30.7351 21.1477 29.8061 22.0597 29.8146 23.1761C29.8061 24.3097 30.7351 25.2216 31.8601 25.2216ZM43.9261 11.9091H41.3267V11.0312C41.3267 10.1449 41.6847 9.625 42.75 9.625C43.1847 9.625 43.6278 9.71875 43.9176 9.8125L44.5568 7.08523C44.1051 6.94886 43.108 6.72727 41.9915 6.72727C39.5284 6.72727 37.696 8.11648 37.696 10.9631V11.9091H35.8466V14.6364H37.696V25H41.3267V14.6364H43.9261V11.9091ZM46.1442 25H49.7749V11.9091H46.1442V25ZM47.968 10.2216C49.0504 10.2216 49.9368 9.39489 49.9368 8.38068C49.9368 7.375 49.0504 6.54829 47.968 6.54829C46.8942 6.54829 46.0078 7.375 46.0078 8.38068C46.0078 9.39489 46.8942 10.2216 47.968 10.2216ZM63.5753 15.642C63.2514 13.2301 61.3082 11.7386 58.0014 11.7386C54.652 11.7386 52.4446 13.2898 52.4531 15.8125C52.4446 17.7727 53.6804 19.0426 56.2372 19.554L58.5043 20.0057C59.6463 20.2358 60.1662 20.6534 60.1832 21.3097C60.1662 22.0852 59.3224 22.6392 58.0526 22.6392C56.7571 22.6392 55.8963 22.0852 55.6747 21.0199L52.1037 21.2074C52.4446 23.7131 54.5753 25.2557 58.044 25.2557C61.4361 25.2557 63.8651 23.5256 63.8736 20.9432C63.8651 19.0511 62.6293 17.9176 60.0895 17.3977L57.7202 16.9205C56.5014 16.6562 56.0497 16.2386 56.0582 15.608C56.0497 14.8239 56.9361 14.3125 58.0611 14.3125C59.3224 14.3125 60.0724 15.0028 60.2514 15.8466L63.5753 15.642Z" fill="#1F2937"></path></svg>
            </i>
            <h1 className='text-5xl text-black capitalize font-semibold'>{t("hero.head")}</h1>
            <p className='text-neutral-600 my-8 text-xl'>{t("hero.subhead")}</p>
          </div>
          <div className='filteration mt-4 '>
            <form className='grid grid-cols-4 gap-4 items-center justify-center p-4 bg-white rounded-2xl divide divide-x-2  rtl:divide-x-reverse'>
              <div className='flex items-center justify-center flex-col'>
              <p className='text-start mb-2 font-medium'>price</p>
              <Select defaultValue="price" onChange={handleChange}>
                <Option value="price" disabled>choose price</Option>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              </div>
              <div className='flex items-center justify-center flex-col'>
              <p className='text-start mb-2 font-medium'>guests</p>
              <Select defaultValue="price" onChange={handleChange}>
                <Option value="price" disabled>choose price</Option>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              </div>
              <div className='flex items-center justify-center flex-col'>
              <p className='text-start mb-2 font-medium'>data</p>
              <Select defaultValue="price" onChange={handleChange}>
                <Option value="price" disabled>choose price</Option>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              </div>
              <div className='flex items-center justify-center'>
                <button className='grid place-items-center w-[50px] h-[50px] bg-primary text-white text-2xl rounded-full font-bold'>
                  <CiSearch />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default memo(Hero)
