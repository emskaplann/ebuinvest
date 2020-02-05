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
  arr.push(
    <Carousel.Item key={16}>
      <img
        className="d-block w-100"
        src="screenshots/16.png"
        alt="First slide"
      />
    </Carousel.Item>
  )
  arr.push(
    <Carousel.Item key={14}>
      <img
        className="d-block w-100"
        src="screenshots/17.png"
        alt="First slide"
      />
    </Carousel.Item>
  )
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
        To see more detailed screenshots, please click <b><Link to="/screenshots">here.</Link> Also everyday we share up-to-date ideas(screenshots from the indicator) on TradingView.<a href="https://www.tradingview.com/u/EbuInvest/" target="_blank" rel="noopener noreferrer"> Join us on TradingView.</a></b>
      </div>
    </div>
    </>
  )
}
