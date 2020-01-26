import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExampleComponent from "react-rounded-image";
import { SocialIcon } from 'react-social-icons';



export default class HowTo extends React.Component {
  componentDidMount(){
    Array.from(document.getElementsByClassName("social-icon")).forEach(a => a.setAttribute("target", "_blank"))
  }

  render(){
    return(
      <>
      <Container style={{marginTop: 20}}>
        <Image src="/tgeyes.png" fluid={true} style={{borderRadius: 5}} />
        <br /><br />
        <div className="card">
          <div className="card-body">
            <h3><b>How to?</b></h3>
            <h4><b>1. How to setup our Indicator?</b></h4>
            We have a guide for just that. Please click <a href="https://medium.com/@snmzbrby/ebu-indicator-guide-b9bfe60916a3">here.</a> Also we publish weekly stories about finance on that account.
            This guide covers not only setup, It also includes how to take actions(buy or sell) based on our Indicator.
          </div>
        </div>
        <br />
      </Container>
      </>
    )
  }
}
