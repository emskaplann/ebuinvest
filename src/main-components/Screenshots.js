import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import $ from 'jquery';


// Wolfe => 1 4 9 10 12 13 16 17 18
// Gartley => 2 19
// Butterfly => 6 7 8 14 15 16
// Triangle => 5 6 7
// H&S => 3 4 8 11 13

export default class Screenshots extends React.Component {
  componentDidMount(){
    window.document.title = "EBU INVEST | Screenshots"
    $('#wolf').click(function(){
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
      $('#wayline').click(function(){
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
                <a id="wayline" href="#the-wayline" className="nav-link">The Way Line</a>
              </Row>
            <br />
            <span id="wolfe-wave" onClick={this.props.history.goBack}><b>{"< Go back "}</b></span>| <Link to="/" style={{textDecoration: 'none', color: "black"}}><b>{"< Go to Main Page"}</b></Link>
            <br />
            <Divider horizontal>Wolfe Wave</Divider>
            <br />
            <div style={{textAlign: 'center'}}>
              <Image style={{borderRadius: 5}} src="/screenshots/1.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/4.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/9.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/10.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/12.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/13.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/16.png" fluid={true} />
            <br />
            </div>
            <div style={{textAlign: 'center'}}><br />
              <Image style={{borderRadius: 5}} src="/screenshots/17.png" fluid={true} />
              <br />
          </div>
          <div style={{textAlign: 'center'}}><br />
            <Image style={{borderRadius: 5}} src="/screenshots/18.png" fluid={true} />
            <span id="gartley"></span>
          </div>
          <br /><br />
            <Divider horizontal>Gartley</Divider>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/2.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/19.png" fluid={true} />
            <span id="butterfly"></span>
          </div>
          <br /><br />
            <Divider horizontal>Butterfly</Divider>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/6.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/7.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/8.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/14.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/16.png" fluid={true} />
            <span id="triangle"></span>
          </div>
          <br /><br />
            <Divider horizontal>Contracting Triangle</Divider>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/5.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/6.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/7.png" fluid={true} />
            <span id="head-and-shoulders"></span>
          <br />
          </div>
          <br /><br />
            <Divider horizontal>Head & Shoulders</Divider>
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
            <Image style={{borderRadius: 5}} src="/screenshots/8.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/11.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/13.png" fluid={true} />
            <span id="the-wayline"></span>
          <br />
          </div>
          <br /><br />
            <Divider horizontal>The Way Line</Divider>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/20.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/21.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/22.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/23.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/24.png" fluid={true} />
          <br />
          </div>
          <br />
          <div style={{textAlign: 'center'}}>
            <Image style={{borderRadius: 5}} src="/screenshots/25.png" fluid={true} />
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
