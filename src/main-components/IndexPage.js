import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap'
import PricingTable from '../sub-components/PricingTable.js';
class IndexPage extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <Container>
        <PricingTable />
      </Container>
    );
  }
}

export default IndexPage;
