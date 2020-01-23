import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Divider } from 'semantic-ui-react';
import PricingTable from '../sub-components/PricingTable.js';
import CustomCarousel from '../sub-components/CustomCarousel.js';
import WhatIsEbuIndicator from '../sub-components/WhatIsEbuIndicator.js';

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
          <Container style={{marginBottom: 100}}>
            <Divider style={{color: 'white'}} horizontal>payment flow</Divider>
          </Container>
        </>
    );
  }
}

export default IndexPage;
