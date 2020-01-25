import React from 'react';
import { Container, Row, Col, Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import $ from 'jquery';


// Wolfe => 11 9 8 7 6 4 2 1
// Gartley => 18 17 12 6
// Butterfly => 3 4 5 13 14
// Triangle => 5 15 16
// H&S => 1 6 10
export default class Screenshots extends React.Component {
  componentDidMount(){
    $('#wolfe').click(function(){
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top
          }, 500);
          return false;
      });
    $('#gart').click(function(){
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top
          }, 500);
          return false;
      });
    $('#butter').click(function(){
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top
          }, 500);
          return false;
      });
    $('#tri').click(function(){
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top
          }, 500);
          return false;
      });
    $('#head').click(function(){
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top
          }, 500);
          return false;
      });
  }

  render(){
    return(
      <>
      <Container style={{marginTop: 20}}>
        <Image src="/tgeyes.png" fluid={true} style={{borderRadius: 5}} />
        <br /><br />
        <div className="card">
          <div className="card-body">
            <h3><b>Screenshots</b></h3>
              <Row>
                <a id="wolf" href="#wolfe-wave" className="nav-link">Wolfe Wave</a>
                <a id="gart" href="#gartley" className="nav-link">Gartley</a>
                <a id="butter" href="#butterfly" className="nav-link">Butterfly</a>
                <a id="tri" href="#triangle" className="nav-link">Contracting Triangle</a>
                <a id="head" href="#head-and-shoulders" className="nav-link">Head & Shoulders</a>
              </Row>
            <br />
            <span onClick={this.props.history.goBack}><b>{"< Go back "}</b></span>| <Link to="/" style={{textDecoration: 'none', color: "black"}}><b>{"< Go to Main Page"}</b></Link>
            <br />
            <Divider horizontal id="wolfe-wave">Wolfe Wave</Divider>
            <br />
            <div style={{textAlign: 'center'}}>
              <Image style={{borderRadius: 5}} src="/screenshots/11.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/9.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/8.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/7.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/6.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/4.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/2.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/1.png" fluid={true} />
          </div>
          <br /><br />
            <Divider horizontal id="gartley">Gartley</Divider>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/18.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/17.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/12.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/6.png" fluid={true} />
          <br />
          </div>
          <br /><br />
            <Divider horizontal id="butterfly">Butterfly</Divider>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/3.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/4.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/5.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/13.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/14.png" fluid={true} />
          <br />
          </div>
          <br /><br />
            <Divider horizontal id="triangle">Contracting Triangle</Divider>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/5.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/15.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/16.png" fluid={true} />
          <br />
          </div>
          <br /><br />
            <Divider horizontal id="head-and-shoulders">Head & Shoulders</Divider>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/1.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/6.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/10.png" fluid={true} />
          <br />
          </div>
          <br />

        </div>
        </div>
      </Container>
      <br />
      </>
    )
  }
}
