import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Divider } from 'semantic-ui-react';
import PricingTable from '../sub-components/PricingTable.js';
import CustomCarousel from '../sub-components/CustomCarousel.js';
import WhatIsEbuIndicator from '../sub-components/WhatIsEbuIndicator.js';
import PaymentFlow from '../sub-components/PaymentFlow.js';

class IndexPage extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
        <>
          <Container>
            <br />
              <WhatIsEbuIndicator />
            <br />
            <Divider style={{color: 'white'}} horizontal>Screenshots from ebu indicator</Divider>
            <CustomCarousel />
          </Container>
          <PricingTable />
          <Container style={{marginBottom: 150}}>
            <PaymentFlow />
          </Container>
          <br />
          <br />
        </>
    );
  }
}

export default IndexPage;
