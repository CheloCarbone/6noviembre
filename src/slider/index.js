import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = () => {
  return (
    <Carousel cols={1} rows={1} gap={10} loop={true}>
      <Carousel.Item>
        <img width="100%" src="https://cdn.pixabay.com/photo/2022/11/02/22/07/butterfly-7566106_1280.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://cdn.pixabay.com/photo/2022/11/12/16/42/elk-7587415_1280.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images.unsplash.com/photo-1477949775154-d739b82400b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;