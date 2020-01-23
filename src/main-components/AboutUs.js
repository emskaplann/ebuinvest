import React from 'react';
import { Container } from 'react-bootstrap'

export default function AboutUs(){
  return(
    <Container style={{marginTop: 20}}>
      <div className="card">
        <div className="card-body">
          <h3><b>About Us</b></h3>
          We're just two friend who manage EBU INVEST.
        </div>
      </div>
    </Container>
  )
}
