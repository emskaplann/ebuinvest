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
            <h4><b>How can I setup the Indicator?</b></h4>
            We have a guide for just that.
          </div>
        </div>
        <br />
      </Container>
      </>
    )
  }
}
