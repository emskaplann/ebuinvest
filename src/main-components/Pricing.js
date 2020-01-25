import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PricingTable from '../sub-components/PricingTable.js';
import PaymentFlow from '../sub-components/PaymentFlow.js';

export default class Pricing extends React.Component {

  render(){
    return(
      <>
        <Container>
          <br />
          <Image src="/tgeyes.png" fluid={true} style={{borderRadius: 5}} />
        </Container>
        <PricingTable />
        <Container>
          <PaymentFlow />
          <br />
          <br />
          <br />
        </Container>
      </>
  )
  }
}
