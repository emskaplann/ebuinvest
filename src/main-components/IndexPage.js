import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Divider } from 'semantic-ui-react';
import PricingTable from '../sub-components/PricingTable.js';
class IndexPage extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
        <>
          <PricingTable />
          <Container>
            <Divider style={{color: 'white'}} horizontal>What is EBU Indicator?</Divider>
          </Container>
        </>
    );
  }
}

export default IndexPage;
