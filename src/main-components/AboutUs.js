import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class AboutUs extends React.Component {
  render(){
    return(
      <Container style={{marginTop: 20}}>
        <div className="card">
          <div className="card-body">
            <h3><b>About Us</b></h3>
            We're just two friend who manage EBU INVEST.
            <br /><br />
            <span onClick={this.props.history.goBack}><b>{"< Go back "}</b></span>| <Link to="/" style={{textDecoration: 'none', color: "black"}}><b>{"< Go to Main Page"}</b></Link>
          </div>
        </div>
      </Container>
    )
  }
}
