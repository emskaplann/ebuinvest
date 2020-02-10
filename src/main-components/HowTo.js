import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default class HowTo extends React.Component {
  componentDidMount(){
    window.document.title = "EBU INVEST | How To?"
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
            We have a guide for just that. Please click <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@snmzbrby/ebu-indicator-guide-b9bfe60916a3"><b>here.</b></a> Also we publish weekly stories about finance on that account.
            This guide covers not only setup, It also includes how to take actions(buy or sell) based on our Indicator.
            <br /><br />

            <h4><b>2. How to take actions(buy or sell) based on our Indicator?</b></h4>
            Our setup and action guide is in the same guide. Please click <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@snmzbrby/ebu-indicator-guide-b9bfe60916a3"><b>here</b></a> to see the guide.
            <br /><br />

            <h4><b>3. How to Make Profit with EBU Indicator?</b></h4>
            There is a slideshow below, besides the stories we publish on Medium. But I would highly recommend you to see these Profit Scenarios that happened with <b>EBU Indicator.</b>
            <br />
            <ol>
              <li><a href="https://medium.com/@snmzbrby/ebu-indicator-profit-scenarios-1-tsla-bdf4e2fcd897" target="_blank" rel="noopener noreferrer"><b>EBU Indicator Profit Scenarios - TSLA</b></a></li>
              <li><b>On the way...</b></li>
            </ol>
            <div className='embed-container embed-responsive embed-responsive-4by3'>
              <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTNYOSfdxKZZLqUYC1rPIMnEN_G3ENjfdRsOZNYAJs4CF5PtCIjdGgKnFptAIB19oly4rtiYA4kXWlc/embed?start=false&loop=false&delayms=5000" className="google-slides-container" frameBorder="0" width="960" height="569" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
            <span onClick={this.props.history.goBack}><b>{"< Go back "}</b></span>| <Link to="/" style={{textDecoration: 'none', color: "black"}}><b>{"< Go to Main Page"}</b></Link>
          </div>
        </div>
        <br />
      </Container>
      </>
    )
  }
}
