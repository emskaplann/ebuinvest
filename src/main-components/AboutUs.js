import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';



export default class AboutUs extends React.Component {
  componentDidMount(){
    window.document.title = "EBU INVEST | About Us"
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
            <h3><b>About Us</b></h3>
            We are two friends who have been trading for about 4 years. We developed this software to simplify our own business by automating the analysis methods we use. After the development process of this software we realized how powerful and useful it was, therefore we decided to share it so that people like you could benefit from it.
            <br /><br /><br />
            <Row>
              <Col xs={12} sm={12} md={5} lg={5} style={{textAlign: 'center'}}>
                <Image src="emsk.jpg" fluid={true} roundedCircle={true} thumbnail={true} style={{width: "75%"}}/>
                <br />
                <b>Emirhan Kaplan</b>
                <br />
                Software Engineer | Trader
                <br />
                Favorite Investment Tool: <b>Warrant</b>
                <br />
                <span className="text-muted">New York, US</span>
                <br /><br />
                <SocialIcon url="https://www.linkedin.com/in/emirhan-kaplan/" />
                <SocialIcon style={{marginLeft: 5}} url="https://twitter.com/emskaplann" />
                <SocialIcon style={{marginLeft: 5}} url="https://github.com/emskaplann" />
                <br /><br />
              </Col>
              <Col xs={2} sm={2} md={2} lg={2}>
              </Col>
              <Col xs={12} sm={12} md={5} lg={5} style={{textAlign: 'center'}}>
                <Image src="birbey.jpeg" fluid={true} roundedCircle={true} thumbnail={true} style={{width: "75%"}} />
                <br />
                <b>Alperen Birbey Sonmez</b>
                <br />
                Translator | Student | Trader
                <br />
                Favorite Investment Tool: <b>Warrant</b>
                <br />
                <span className="text-muted">Istanbul, Turkey</span>
                <br /><br />
                <SocialIcon url="https://www.linkedin.com/in/alperen-birbey-s%C3%B6nmez-05a69a199/" />
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
