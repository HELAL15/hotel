import React, { memo } from 'react';
import Container from '../../helpers/Container';
import SkeletonImage from 'antd/es/skeleton/Image';
import Skeleton from 'react-loading-skeleton';

const ServiceImgs = ({ imgs = [] , loading }) => {
  return (
    <>
      <section className='images pt-5 mb-1'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
           {
            loading ? <>
            <div className='relative rounded-md overflow-hidden'>
                <Skeleton className='w-full h-48 md:h-80 lg:h-[25rem]' />
              </div>
              <div className='relative grid grid-cols-2 gap-2'>
                <div className='rounded-md overflow-hidden'>
                  <Skeleton className='w-full h-20 md:h-40 lg:h-48' />
                </div>
                <div className='rounded-md overflow-hidden'>
                  <Skeleton className='w-full h-20 md:h-40 lg:h-48' />
                </div>
                <div className='rounded-md overflow-hidden'>
                  <Skeleton className='w-full h-20 md:h-40 lg:h-48' />
                </div>
                <div className='rounded-md overflow-hidden'>
                  <Skeleton className='w-full h-20 md:h-40 lg:h-48' />
                </div>
              </div>
            </> :
              <>
              <div className='relative rounded-md overflow-hidden'>
              {imgs[0] && (
                <img
                  loading='lazy'
                  src={imgs[0]?.url}
                  alt='service'
                  className='w-full h-full object-cover rounded-lg aspect-[5/3]'
                />
              )}
            </div>
            <div className='relative grid grid-cols-2 gap-2 aspect-[5/3]'>
              
                <div className='rounded-md overflow-hidden'>
                  <img
                    loading='lazy'
                    src={imgs[1]?.url}
                    alt='service'
                    className='w-full h-full object-cover rounded-lg'
                  />
                </div>
              
                <div className='rounded-md overflow-hidden'>
                  <img
                    loading='lazy'
                    src={imgs[2]?.url}
                    alt='service'
                    className='w-full h-full object-cover rounded-lg'
                  />
                </div>
              
                <div className='rounded-md overflow-hidden'>
                  <img
                    loading='lazy'
                    src={imgs[3]?.url}
                    alt='service'
                    className='w-full h-full object-cover rounded-lg'
                  />
                </div>
              
              
                <div className='rounded-md overflow-hidden'>
                  <img
                    loading='lazy'
                    src={imgs[4]?.url}
                    alt='service'
                    className='w-full h-full object-cover rounded-lg'
                  />
                </div>
              
            </div>
              </>

           }
          </div>
            
        </Container>
      </section>
    </>
  );
};

export default memo(ServiceImgs);
