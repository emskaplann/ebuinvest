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
            Our setup and actions guide is in the same guide. Please click <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@snmzbrby/ebu-indicator-guide-b9bfe60916a3"><b>here</b></a> to see the guide.
            <br /><br />

            <h4><b>3. How to get motivated?</b></h4>
            Right now we are creating a playlist for motivation. The link is here but it's not big right now :).<br />
            <span className="text-muted"><b>Note:</b> We don't create or make these videos, it's just sources we found helpful.</span>
            <br /><br />

            <h4><b>4. How to learn basics about finance, stock markets, forex?</b></h4>
            Right now we are creating a playlist for education series. We still don't have any good source to share right now but we'll update here ASAP.<br />
            <span className="text-muted"><b>Note:</b> We don't create or make these videos, it's just sources we found helpful.</span>
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
