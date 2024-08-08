import React, { memo } from 'react';
import Container from '../../helpers/Container';
import useFetch from '../../hooks/useFetch';
import Card from './Card';
import Skeleton from 'react-loading-skeleton';
import { Empty } from 'antd';
import { useTranslation } from 'react-i18next';
import SecTitle from '../SecTitle';

const Features = ({data , isLoading , head}) => {

  const features = data?.data || [];


  return (
    <>
      <section className='relative z-10'>
        <Container>
          {/* <h2 className='text-xl md:text-2xl font-semibold mb-2 md:mb-4 mx-4 text-center lg:text-left rtl:lg:text-right'>{head}</h2> */}
          <SecTitle head={head} />
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch'>
            { 
              isLoading ? 
              <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 col-span-full '>
              <Skeleton className='py-20 rounded-[30px]' />
              <Skeleton className='py-20 rounded-[30px]' />
              <Skeleton className='py-20 rounded-[30px]' />
              <Skeleton className='py-20 rounded-[30px]' />
              </div> :
              features.length > 0 ? 
              features.map((comfort) => (
                <Card content={comfort} key={comfort.id} />
              )) : 
              <div className='text-center col-span-full'><Empty/></div>
            }
          </div>
        </Container>
      </section>
    </>
  );
}

export default memo(Features);
