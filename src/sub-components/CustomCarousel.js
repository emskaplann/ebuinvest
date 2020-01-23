import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function CustomCarousel() {
  return(
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/screenshots/indir (1).png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/screenshots/indir (2).png"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
