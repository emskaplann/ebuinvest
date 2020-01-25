import React from 'react';
import ReactContactForm from 'react-mail-form';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class ContactForm extends React.Component{
  render(){
    return(
      <Container style={{marginTop: 20}}>
        <div className="card">
          <div className="card-body">
            <h3><b>How to Contact Us?</b></h3>
            You can simply press<a target="_blank" href="mailto:contact@ebuinvest.com?subject=Support - Your Subject" style={{textDecoration: 'none'}}> <b>here</b></a> to compose a mail to us.
            Or you can compose yourself, to this mail address <b>contact@ebuinvest.com.</b><br/>
          <div style={{marginTop: 10}}>We don't present a contact form on our website because of the spammers 🤖</div><br /><br />
          <span onClick={this.props.history.goBack}><b>{"< Go back "}</b></span>| <Link to="/" style={{textDecoration: 'none', color: "black"}}><b>{"< Go to Main Page"}</b></Link>
        </div>
        </div>
        <br />
      </Container>
    )
  }
}
