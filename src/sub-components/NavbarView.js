import React from 'react';
import { Navbar, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavbarView extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <>
        <Navbar bg="white" variant="light" expand="lg">
          <Navbar.Brand style={{fontFamily: 'Rubik'}}>
            <Link to="/" style={{textDecoration: 'none'}}>
              EBU INVEST<span style={{fontFamily: "Source Sans Pro", fontWeight: "bold"}} className="text-muted"> | Trade Like a Pro.</span>
            </Link>
          </Navbar.Brand>
        <Navbar.Toggle style={{color: "primary"}} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse variant="primary" id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Row style={{justifyContent: "space-between", paddingLeft: 15, paddingRight: 15}}>
                <Link className="nav-link" to="/pricing" style={{textDecoration: 'none'}}>Pricing</Link>
                <Link className="nav-link" to="/about-us" style={{textDecoration: 'none', marginLeft: 3}}>About Us</Link>
                <Link className="nav-link" to="/screenshots" style={{textDecoration: 'none', marginLeft: 3}}>Screenshots</Link>
                <Link className="nav-link" to="/how-to" style={{textDecoration: 'none', marginLeft: 3}}>How to?</Link>
                <Link className="nav-link" to="/faq" style={{textDecoration: 'none', marginLeft: 3}}>FAQ</Link>
                <Link className="nav-link" to="/reach-us" style={{textDecoration: 'none', marginLeft: 3}}>Contact Us</Link>
              </Row>
            </Nav>
            <Nav>
              <Link className="nav-link" to="/become-an-affiliate" style={{textDecoration: 'none'}}>Become an Affiliate</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}
