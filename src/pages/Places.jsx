
import React, { memo, useState } from 'react'
import Container from '../helpers/Container'
import Seo from '../helpers/Seo'
import { Image, Tabs } from 'antd'
import useFetch from '../hooks/useFetch'

const Places = () => {

  const [keys , setKeys] = useState(0)

  const handleChange = (key)=>{
    setKeys(key)
  }
  
  const {data:gallery} = useFetch(`/gallerys?category_id=${keys}` , [keys])

const {data:cats} = useFetch('/categorys')

  return (
    <>
          <Seo title="places"  />
      <section className='mt-8'>
        <Container>
          <Tabs onChange={handleChange}>
            <Tabs.TabPane tab="All" key="">
            {gallery?.data.map((img, index) => (
                    <Image.PreviewGroup key={index}>
                      {img.images.map((url, idx) => (
                        <Image key={idx} src={url} alt={img.category_title} />
                      ))}
                    </Image.PreviewGroup>
                  ))}
            </Tabs.TabPane>
            {
              cats?.data.map((cat)=>{
                return <Tabs.TabPane tab={cat.title} key={cat.id}>
                {gallery?.data.map((img, index) => (
                    <Image.PreviewGroup key={index}>
                      {img.images.map((url, idx) => (
                        <Image key={idx} src={url} alt={img.category_title} />
                      ))}
                    </Image.PreviewGroup>
                  ))}
                </Tabs.TabPane>
              })
            }
          </Tabs>
        </Container>
      </section>
    </>
  )
}

export default memo(Places)
