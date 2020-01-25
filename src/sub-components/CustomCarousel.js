import React from 'react';
import { Carousel } from 'react-bootstrap';

function populateCarousel(){
  let arr = []
  for(let i=1;i < 11;i++){
    arr.push(
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`screenshots/${i}.png`}
          alt="First slide"
        />
      </Carousel.Item>
    )
  }
  console.log(arr)
  return arr
}

export default function CustomCarousel() {
  return(
    <Carousel>
      {populateCarousel()}
    </Carousel>
  )
}
