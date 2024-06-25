import React, { memo, useState, useEffect } from 'react'
import Container from '../helpers/Container'
import Seo from '../helpers/Seo'
import { Image, Tabs, Skeleton } from 'antd'
import useFetch from '../hooks/useFetch'

const Places = () => {
  const [keys, setKeys] = useState("")

  const handleChange = (key) => {
    setKeys(key)
  }
  
  const { data: gallery, refetch: refetchGallery, isLoading: galleryLoad } = useFetch(`/gallerys?category_id=${keys}`, [keys])
  const { data: cats, isLoading: catLoad } = useFetch('/categorys')

  useEffect(() => {
    refetchGallery()
  }, [keys])

  return (
    <>
      <Seo title="places" />
      <section className='mt-8'>
        <Container>
          <Tabs onChange={handleChange} activeKey={keys}>
            <Tabs.TabPane tab="الكل" key="">
              {galleryLoad ? (
                <Skeleton active />
              ) : (
                <Image.PreviewGroup>
                  {gallery?.data?.map((img) => (
                    img.images.map((url, idx) => (
                      <Image key={idx} src={url.url} alt={img.category_title} />
                    ))
                  ))}
                </Image.PreviewGroup>
              )}
            </Tabs.TabPane>
            {cats?.data?.map((cat) => (
              <Tabs.TabPane tab={cat.title} key={cat.id}>
                {galleryLoad ? (
                  <Skeleton active />
                ) : (
                  <Image.PreviewGroup>
                    {gallery?.data?.map((img) => (
                      img.images.map((url, idx) => (
                        <Image key={idx} src={url.url} alt={img.category_title} />
                      ))
                    ))}
                  </Image.PreviewGroup>
                )}
              </Tabs.TabPane>
            ))}
          </Tabs>
        </Container>
      </section>
    </>
  )
}

export default memo(Places)
