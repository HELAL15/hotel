import React, { memo, useState } from 'react'
import Container from '../helpers/Container'
import Sorting from '../helpers/Sorting'
import PlaceCard from '../components/PlaceCard'
import { twMerge } from 'tailwind-merge'
import Seo from '../helpers/Seo'
import { Tabs } from 'antd'
import useFetch from '../hooks/useFetch'

const Places = () => {

  const [keys , setKeys] = useState(0)

  const handleChange = (key)=>{
    console.log(key);
    console.log(gallery);
    setKeys(key)
  }
  
  const {data:gallery} = useFetch(`/gallerys?category_id=${keys}` , [keys])
  console.log(gallery);

const {data:cats} = useFetch('/categorys')
console.log(cats);

  return (
    <>
          <Seo title="places"  />
      <section className='mt-8'>
        <Container>
          {/* <Sorting sx={twMerge("grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5")}>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
            <PlaceCard/>
          </Sorting> */}
          <Tabs onChange={handleChange}>
            <Tabs.TabPane tab="All" key="1">ggg</Tabs.TabPane>
            {
              cats?.data.map((cat)=>{
                return <Tabs.TabPane tab={cat.title} key={cat.id}>
                {gallery?.data.map((img, index) => (
                    <div key={index}>
                      {img.images.map((url, idx) => (
                        <img key={idx} src={url} alt={img.category_title} />
                      ))}
                    </div>
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
