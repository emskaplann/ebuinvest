import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function populateCarousel(){
  let arr = []
  for(let i=10;i > 0;i--){
    arr.push(
      <Carousel.Item key={i}>
        <img
          className="d-block w-100"
          src={`screenshots/${i}.png`}
          alt="First slide"
        />
      </Carousel.Item>
    )
  }
  return arr
}

export default function CustomCarousel() {
  return(
    <>
    <Carousel>
      {populateCarousel()}
    </Carousel>
    <br />
    <div className="card">
      <div className="card-body">
        To see more detailed screenshots, please click <b><Link to="/screenshots">here.</Link></b>
      </div>
    </div>
    </>
  )
}
