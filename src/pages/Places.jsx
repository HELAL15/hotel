import React, { memo, useState, useEffect } from 'react'
import Container from '../helpers/Container'
import Seo from '../helpers/Seo'
import { Image, Tabs } from 'antd'
import useFetch from '../hooks/useFetch'

const Places = () => {
  const [keys, setKeys] = useState("")

  const handleChange = (key) => {
    setKeys(key)
  }
  
  const { data: gallery, refetch: refetchGallery } = useFetch(`/gallerys?category_id=${keys}`, [keys])
  const { data: cats } = useFetch('/categorys')
  console.log(gallery);

  useEffect(() => {
    refetchGallery()
  }, [keys])

  return (
    <>
      <Seo title="places" />
      <section className='mt-8'>
        <Container>
          <Tabs onChange={handleChange}>
            <Tabs.TabPane tab="All" key="">
              <Image.PreviewGroup>
                {gallery?.data?.map((img) => (
                  img.images.map((url, idx) => (
                    <Image key={idx} src={url.url} alt={img.category_title} />
                  ))
                ))}
              </Image.PreviewGroup>
            </Tabs.TabPane>
            {cats?.data?.map((cat) => (
              <Tabs.TabPane tab={cat.title} key={cat.id}>
                <Image.PreviewGroup>
                  {gallery?.data?.map((img) => (
                    img.images.map((url, idx) => (
                      <Image key={idx} src={url.url} alt={img.category_title} />
                    ))
                  ))}
                </Image.PreviewGroup>
              </Tabs.TabPane>
            ))}
          </Tabs>
        </Container>
      </section>
    </>
  )
}

export default memo(Places)
