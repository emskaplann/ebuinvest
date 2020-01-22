import React from 'react';
import Confetti from 'react-dom-confetti';
import { Container } from 'react-bootstrap'
import { Loader, Dimmer } from 'semantic-ui-react'

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
    subDetails: {},
    confettiPop: false
  }

  componentDidMount(){
    const { subId } = this.props.match.params
    fetch("https://api.sandbox.paypal.com/v1/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Authorization': 'Basic '+btoa('AbkYjaXRnUof-33dXXMuHzz6SS3RHH-_QFDHzZSlPwZgBWiNSPRZznlGIJ8dwC2nsRRLqOs8UONfzqUV:EG6TVu5x6E01gPZEjFzpsI0XHxraZMgw3mWFqrSyl-Yxm2muOgn-aL_IGpkVcm1yod2B1sQwhttkEnBG'),
      }, body: "grant_type=client_credentials"
    })
    .then(r => r.json())
    .then(({ access_token }) => {
      console.log(access_token)
      fetch(`https://api.sandbox.paypal.com/v1/billing/subscriptions/${subId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + access_token
        }
      })
      .then(r => r.json())
      .then(subDetails => {
        console.log(subDetails)
        if(subDetails){
          this.setState({subDetails: subDetails.subscriber, confettiPop: true})
        } else {
          console.log("No subscription found :(")
        }
      })
    })
  }

  render(){
    return(
      <>
      <Dimmer active={!this.state.confettiPop}>
        <Loader active={!this.state.confettiPop} />
      </Dimmer>
      <Container style={{marginTop: 20}}>
        <h1 style={{textAlign: 'center', fontWeight: 'bold'}}>Congrats, {this.state.confettiPop ? this.state.subDetails.name.given_name : "loading..." }! Your <u>free trial</u> has started!</h1>
        <h5 style={{textAlign: 'center', fontWeight: 'bold'}}>We sent a e-mail to your address <span style={{color: '#007bff'}}>{this.state.confettiPop ? this.state.subDetails.email_address: "loading..." }</span>. Please check your mail for further instructions.</h5>
        <h6 style={{textAlign: 'center', fontWeight: 'bold'}}>Also PayPal sent a e-mail for your transaction details. And if you want to cancel your subscription or you want to check your status with the subscription please go into your PayPal account.</h6>
    </Container>
      <div style={{display: 'flex', width: '50%', margin: '0 auto', alignItems: 'center', top: 0}}>
        <Confetti active={this.state.confettiPop} config={config}/>
      </div>
    </>
    )
  }
}
