import React, { memo} from 'react'
import Container from '../helpers/Container'
import dashed from '../img/dashed.svg'
import { twMerge } from 'tailwind-merge'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'
import { Empty } from 'antd'

const HowItWork = () => {
  const lang = useSelector((state) => state.lang.value)

  const {data , isLoading} = useFetch("/about-relax" ,[lang])
  const relaxes = data?.data || []

  const {t} = useTranslation()


  return (
    <>
      <section>
        <Container>
          <div className={twMerge(`text-center mb-10`)}>
            <h2 className='text-xl md:text-2xl font-semibold mb-1 md:mb-2'>{t("howItWork.head")}</h2>
            <p className=''>{t("howItWork.subhead")}</p>
          </div>
          <div className="mt-20 relative grid md:grid-cols-3 gap-20 items-stretch">
            <img src={dashed}  alt="" loading="lazy"  className="hidden md:block absolute inset-x-0 top-10"  />
            
            {
              relaxes?.length > 0 ?
                relaxes.map((relax)=>{
                  return (
                  <div key={relax.id} className="relative flex flex-col items-center max-w-xs mx-auto">
                    <img alt={relax.title} loading="lazy" className="mb-8 max-w-[180px] mx-auto" src={relax.icon} />
                    <div className="text-center mt-auto ">
                      <h3 className="text-xl font-semibold ">{relax.title}</h3>
                      <p className="block mt-5 text-neutral-500 dark:text-neutral-400 flex-grow">{relax.description}</p>
                    </div>
                  </div>
                  )
              }) :
              isLoading?

              [...Array(3)].map((_, index) => (
                <div key={index} className='flex flex-col gap-2 items-center'>
                  <Skeleton width={100} height={100} borderRadius={99999} className='rounded-full p-20 mx-auto mb-2' />
                  <Skeleton  width={150} />
                  <Skeleton width={250} />
                </div>
                )) :
              <Empty className='col-span-3 my-8'/>
            }
        </div>
        </Container>
      </section>
    </>
  )
}

export default memo(HowItWork)
