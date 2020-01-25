import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PricingTable from '../sub-components/PricingTable.js';
import PaymentFlow from '../sub-components/PaymentFlow.js';

export default class Pricing extends React.Component {

  render(){
    return(
      <>
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
