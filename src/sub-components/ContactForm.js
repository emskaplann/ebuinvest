import React from 'react';
import ReactContactForm from 'react-mail-form';
import { Container } from 'react-bootstrap';


export default function ContactForm(){
  return(
    <Container style={{marginTop: 20}}>
      <div className="card">
        <div className="card-body">
          <h3><b>How to Contact Us?</b></h3>
          You can simply press<a href="mailto:contact@ebuinvest.com?subject=Support - Your Subject" style={{textDecoration: 'none'}}> <b>here</b></a> to compose a mail to us.
          Or you can compose yourself, to this mail address <b>contact@ebuinvest.com</b>.
        </div>
      </div>
    </Container>
  )
}
