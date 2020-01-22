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
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand style={{fontFamily: 'Rubik'}}><Link to="/" style={{color: 'white', textDecoration: 'none'}}>EBU INVEST</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Row style={{justifyContent: "space-between", paddingLeft: 15, paddingRight: 15}}>
                <Nav.Link><Link to="/pricing" style={{color: 'white', textDecoration: 'none'}}>Pricing</Link></Nav.Link>
                <Nav.Link><Link to="/about-us" style={{color: 'white', textDecoration: 'none'}}>About Us</Link></Nav.Link>
                <Nav.Link><Link to="/our-work" style={{color: 'white', textDecoration: 'none'}}>Our Work</Link></Nav.Link>
                <Nav.Link><Link to="/how-to-use" style={{color: 'white', textDecoration: 'none'}}>How To Use?</Link></Nav.Link>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar style={{marginTop: 200}} fixed="bottom" bg="primary" variant="dark">
          <Navbar.Brand style={{fontSize: '70%'}} className="mx-auto">
            NYC Based | EBU INVEST © 2020 | All rights reserved.
          </Navbar.Brand>
        </Navbar>
      </>
    )
  }
}
