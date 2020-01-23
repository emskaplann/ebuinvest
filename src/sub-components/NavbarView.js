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
        <Navbar bg="white" variant="primary" expand="lg">
          <Navbar.Brand style={{fontFamily: 'Rubik'}}><Link to="/" style={{textDecoration: 'none'}}>EBU INVEST<span className="text-muted"> | Trade Like a Pro.</span></Link></Navbar.Brand>
        <Navbar.Toggle style={{color: "primary"}} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse variant="primary" id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Row style={{justifyContent: "space-between", paddingLeft: 15, paddingRight: 15}}>
                <Nav.Link><Link to="/pricing" style={{textDecoration: 'none'}}>Pricing</Link></Nav.Link>
                <Nav.Link><Link to="/about-us" style={{textDecoration: 'none'}}>About Us</Link></Nav.Link>
                <Nav.Link><Link to="/how-to" style={{textDecoration: 'none'}}>How To?</Link></Nav.Link>
                <Nav.Link><Link to="/reach-us" style={{textDecoration: 'none'}}>Contact Us</Link></Nav.Link>
              </Row>
            </Nav>
            <Nav>
              <Nav.Link><Link to="/become-an-affiliate" style={{textDecoration: 'none'}}>Become an Affiliate</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar style={{marginTop: 200}} fixed="bottom" bg="white" variant="primary">
          <Navbar.Brand style={{fontSize: '70%'}} className="mx-auto">
            NYC Based | EBU INVEST © 2020 | All rights reserved.
          </Navbar.Brand>
        </Navbar>
      </>
    )
  }
}
