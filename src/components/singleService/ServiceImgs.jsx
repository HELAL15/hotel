import React, { memo } from 'react';
import Container from '../../helpers/Container';

const ServiceImgs = ({ imgs = [] }) => {
  return (
    <>
      <section className='images pt-5'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='relative rounded-md overflow-hidden'>
              {imgs[0] && (
                <img
                  loading='lazy'
                  src={imgs[0]?.url}
                  alt='service'
                  className='w-full h-full object-cover rounded-lg'
                />
              )}
            </div>
            <div className='relative grid grid-cols-2 gap-2'>
              
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default memo(ServiceImgs);
