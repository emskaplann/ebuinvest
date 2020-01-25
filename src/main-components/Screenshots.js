import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

export default class AboutUs extends React.Component {
  componentDidMount(){
    Array.from(document.getElementsByClassName("social-icon")).forEach(a => a.setAttribute("target", "_blank"))
  }

  render(){
    return(
      <>
      <Container style={{marginTop: 20}}>
        <div className="card">
          <div className="card-body">
            <h3><b>Screenshots</b></h3>
            <br />

          </div>
        </div>
      </Container>
      <br />
      </>
    )
  }
}
