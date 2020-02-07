import React from 'react';
import { Row } from 'react-bootstrap';
import { Divider } from 'semantic-ui-react';

export default function JoinUs(){
  return(
    <>
      <Divider horizontal style={{color: "white"}}>JOIN US</Divider>
      <div className="card">
        <div className="card-body" style={{textAlign: 'center'}}>
            <Row style={{justifyContent: 'space-around'}}>
                <a href="https://t.me/joinchat/NeUKX1EKpn9Bk03V2JldlA" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-telegram" style={{fontSize: '5rem'}} aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/ebuinvest/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" style={{fontSize: '5rem'}} aria-hidden="true"></i>
                </a>
                <a href="https://www.twitter.com/ebuinvest/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter" style={{fontSize: '5rem'}} aria-hidden="true"></i>
                </a>
                <a href="https://medium.com/@snmzbrby" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-medium" style={{fontSize: '5rem'}} aria-hidden="true"></i>
                </a>
            </Row>
            <br />
            <Row style={{justifyContent: 'center'}}>
              <b><a href="https://www.tradingview.com/u/EbuInvest/" target="_blank" rel="noopener noreferrer">Join us on TradingView.</a></b>
            </Row>
        </div>
      </div>
    </>
  )
}
