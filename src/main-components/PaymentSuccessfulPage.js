import React from 'react';
import Confetti from 'react-dom-confetti';
import { Container, Image, Row } from 'react-bootstrap'
import { Loader, Dimmer } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const config = {
  angle: 90,
  spread: "50",
  startVelocity: 45,
  elementCount: "120",
  dragFriction: "0.07",
  duration: "4020",
  stagger: 0,
  width: "10px",
  height: "30px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

export default class PaymentSuccessfulPage extends React.Component {
  state = {
    confettiPop: false
  }

  componentDidMount(){
    setTimeout(() => (this.setState({confettiPop: true})), 1000)
    window.document.title = "EBU INVEST | Subscription Successful"
  }

  // txn_key=18F112AF4BE6F25_8745411C4DFF58_8FED8E8CD417BBC1F23FD5D3349_B3



  render(){
    return(
      <>
      <Dimmer active={!this.state.confettiPop}>
        <Loader active={!this.state.confettiPop} />
      </Dimmer>
      <Container style={{marginTop: 20}}>
        <div className="card">
          <div className="card-body" style={{}}>
            <h2 style={{textAlign: 'center', fontWeight: 'bold'}}>Congrats, your subscription is on our records!</h2><br />
            <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>We sent an e-mail to your given address. Please check your inbox for further instructions.</h4><br />
            <h5 style={{textAlign: 'center', fontWeight: 'bold'}}>In case you have a problem such as you didn't get the mail or you don't have access to your given mail address or something else. Please contact us, so we can help you.</h5>
            <Row style={{justifyContent: 'space-around'}}>
              <Link to="/how-to"><b>Check out Our Guides</b></Link>
              <Link to="/reach-us"><b>Contact Us</b></Link>
              <Link to="/"><b>Main Page</b></Link>
              <Link to="/faq"><b>Frequently Asked Questions</b></Link>
            </Row>
            <div style={{display: 'flex', width: '50%', margin: '0 auto', alignItems: 'center', top: 0}}>
              <Confetti active={this.state.confettiPop} config={config}/>
            </div>
        </div>
        </div>
        <br />
        <Image src="/tgroar.jpeg" fluid={true} style={{borderRadius: 5}} /><br />
      </Container>
      <br />
      <br />
    </>
    )
  }
}
