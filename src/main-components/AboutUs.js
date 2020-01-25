import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Player, ControlBar } from 'video-react';
import ExampleComponent from "react-rounded-image";


export default class AboutUs extends React.Component {
  render(){
    return(
      <>
      <Container style={{marginTop: 20}}>
        <div className="card">
          <div className="card-body">
            <h3><b>About Us</b></h3>
            We are two friends who have been trading for about 4 years. We developed this software to simplify our own business by automating the analysis methods we use. After the development process of this software we realized how powerful and useful it was, and we decided to share it so that other people could benefit form it.
            <br /><br />
            <Row>
              <Col xs={5} sm={5} md={5} lg={5}>
                <Image src="emsk.jpg" fluid={true} roundedCircle={true} thumbnail={true} style={{width: "30%"}}/>
              </Col>
              <Col xs={2} sm={2} md={2} lg={2}>
              </Col>
              <Col xs={5} sm={5} md={5} lg={5} className="justify-content-center">
                <Image src="birbey.jpeg" fluid={true} roundedCircle={true} thumbnail={true} style={{width: "30%"}} />
              </Col>
            </Row>
            <br /><br />
            <span onClick={this.props.history.goBack}><b>{"< Go back "}</b></span>| <Link to="/" style={{textDecoration: 'none', color: "black"}}><b>{"< Go to Main Page"}</b></Link>
          </div>
        </div>
        <br />
      </Container>

      </>
    )
  }
}
