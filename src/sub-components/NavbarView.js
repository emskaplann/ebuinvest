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
        <Navbar bg="white" variant="light" collapseOnSelect={true} sticky={window.screen.width < 769 ? "top" : false} expand="lg">
          <Navbar.Brand style={{fontFamily: 'Rubik'}}>
            <Link to="/" style={{textDecoration: 'none'}}>
              EBU INVEST<span style={{fontFamily: "Source Sans Pro", fontWeight: "bold"}} className="text-muted"> | Trade Like a Pro.</span>
            </Link>
          </Navbar.Brand>
        <Navbar.Toggle style={{color: "primary"}} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse variant="primary" id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Row style={{justifyContent: "space-between", paddingLeft: 15, paddingRight: 15}}>
                <Nav.Link as={Link} eventKey="1" to="/pricing" style={{textDecoration: 'none'}}>
                  Pricing
                </Nav.Link>
                <Nav.Link as={Link} eventKey="2" to="/about-us" style={{textDecoration: 'none', marginLeft: 3}}>
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} eventKey="3" to="/screenshots" style={{textDecoration: 'none', marginLeft: 3}}>
                  Screenshots
                </Nav.Link>
                <Nav.Link as={Link} eventKey="4" to="/how-to" style={{textDecoration: 'none', marginLeft: 3}}>
                  How to?
                </Nav.Link>
                <Nav.Link as={Link} eventKey="5" to="/faq" style={{textDecoration: 'none', marginLeft: 3}}>
                  FAQ
                </Nav.Link>
                <Nav.Link as={Link} eventKey="6" to="/reach-us" style={{textDecoration: 'none', marginLeft: 3}}>
                  Contact Us
                </Nav.Link>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}
