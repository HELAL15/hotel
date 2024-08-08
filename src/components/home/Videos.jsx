import React, { memo, useRef, useState } from 'react';
import Container from '../../helpers/Container';
import YouTube from 'react-youtube';

const Videos = () => {
  const [mainVideoId, setMainVideoId] = useState('xRyVxE2qL1E?si=ElH0N2U4qxVTsA3o'); // الفيديو الكبير الافتراضي
  const playerRef = useRef(null);

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.playVideo();
    }
  };

  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.pauseVideo();
    }
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <section>
        <Container>
          <div className='bg-primary/10 grid grid-cols-12 gap-4 rounded-3xl'>
            <div className='col-span-12 lg:col-span-9 bg-primary/20 rounded-xl md:rounded-2xl lg:rounded-3xl h-56 lg:h-auto my-4 mb-0 lg:mb-4 mx-4 lg:ltr:mr-0 lg:rtl:ml-0'>
              <YouTube
                className='rounded-xl md:rounded-2xl lg:rounded-3xl'
                videoId={mainVideoId} // استخدم معرف الفيديو الكبير من الحالة
                opts={opts}
                ref={playerRef}
              />
            </div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/KzKy5Z-8K7k?si=BUExz2K3j5UCuLZF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <div className='col-span-12 lg:col-span-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-4 my-4 mt-0 lg:mt-4 mx-4 lg:ltr:ml-0 lg:rtl:mr-0'>
              {['xRyVxE2qL1E?si=ElH0N2U4qxVTsA3o', 'KzKy5Z-8K7k?si=BUExz2K3j5UCuLZF', 'xRyVxE2qL1E?si=ElH0N2U4qxVTsA3o', 'xRyVxE2qL1E?si=ElH0N2U4qxVTsA3o'].map((videoId, index) => (
                <div
                  key={index}
                  className='bg-primary/20 h-32 rounded-xl md:rounded-2xl lg:rounded-3xl cursor-pointer'
                  onClick={() => setMainVideoId(videoId)} // تغيير الفيديو الكبير عند النقر
                >
                  {/* <YouTube
                    className='rounded-xl md:rounded-2xl lg:rounded-3xl'
                    videoId={videoId}
                    opts={opts}
                    ref={index === 0 ? playerRef : null} // استخدم المرجع للفيديو الكبير فقط
                  /> */}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default memo(Videos);
