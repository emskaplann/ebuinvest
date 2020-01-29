import React from 'react';
import { Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Modal, Row, Col } from 'react-bootstrap';
import loadjs from 'loadjs';

class PricingTable extends React.Component {
  constructor(){
    super()
    this.state = {
      modalMonthly: false,
      modal3Monthly: false,
      modalYearly: false
    }
  }

  monthly = () => {
    loadjs('/StripeRedirect/StripeMonthly.js')
  }

  threeMonthly = () => {
    loadjs('/StripeRedirect/Stripe3Monthly.js')
  }

  yearly = () => {
    loadjs('/StripeRedirect/StripeYearly.js')
  }


  render(){
    return(
      <>
      <section className="pricing py-5" id="pricing">
        <div className="container">
          <Divider style={{color: 'white'}} horizontal>EBU Indicator Pricing</Divider>
          <div className="card">
            <div className="card-body">
              We have <b>3 different subscription options according the different budgets.</b> For companies who needs to subscribe <b>for multiple accounts we offer a special price with discount and <u>30 Day Free Trial.</u></b>  If you have any further questions about pricing or you want a get a price for multiple accounts please contact us from <Link to="/reach-us"><b>here.</b></Link>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Monthly Subscription</h5>
                  <h6 className="card-price text-center">$54.99<span className="period">/month</span></h6>
                  <h6 className="card-title text-muted text-uppercase text-center"><strike>$59.99</strike><span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>10 Days Free Trial</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Notifications</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Wolfe Wave Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Butterfly Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Gartley Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Contracting Triangle Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Head & Shoulders Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Telegram Group with All Users</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>1/1 Support</li>
                  </ul>
                    <button className="btn btn-block btn-primary text-uppercase" onClick={() => this.setState({modalMonthly: true})}>Try Free</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body" style={{borderTop: "5px solid #33AEFF", borderBottom: "5px solid #33AEFF", borderRadius: '1rem'}}>
                  <h5 className="card-title text-muted text-uppercase text-center">3 monthly subscription</h5>
                  <h6 className="card-price text-center">$49.99<span className="period">/month</span></h6>
                  <h6 className="card-title text-muted text-uppercase text-center"><strike>$54.99</strike><span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>10 Days Free Trial</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Notifications</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Wolfe Wave Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Butterfly Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Gartley Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Contracting Triangle Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Head & Shoulders Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Telegram Group with All Users</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>1/1 Support</li>
                  </ul>
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="PKZ7EZYAF9722" />
                    <button type="input" className="btn btn-block btn-primary text-uppercase" name="submit">Try Free</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Yearly Subscription</h5>
                  <h6 className="card-price text-center">$39.99<span className="period">/month</span></h6>
                  <h6 className="card-title text-muted text-uppercase text-center"><strike>$44.99</strike><span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>10 Days Free Trial</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Notifications</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Wolfe Wave Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Butterfly Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Gartley Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Contracting Triangle Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Head & Shoulders Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Telegram Group with All Users</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>1/1 Support</li>
                  </ul>
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="AEF5UPCKKAFHJ" />
                    <button type="input" className="btn btn-block btn-primary text-uppercase" name="submit">Try Free</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal centered show={this.state.modalMonthly} onHide={() => this.setState({modalMonthly: false})}>
        <Modal.Header>
          <h6><b>Start Your Free Trial with 2 Options!</b></h6>
        </Modal.Header>
        <Modal.Body>
          <Row style={{justifyContent: 'center'}}>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="L297P6HH7JG3J" />
              <button type="submit" className="btn btn-block btn-primary" name="submit">PayPal Account</button>
            </form>
          </Row>
            <Divider horizontal>or</Divider>
          <Row style={{justifyContent: 'center'}}>
            <button className="btn btn-primary" onClick={() => this.monthly()}>Credit or Debit Card</button>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal centered show={this.state.modal3Monthly} onHide={() => this.setState({modalMonthly: false})}>
        <Modal.Header>
          <h6><b>Start Your Free Trial with 2 Options!</b></h6>
        </Modal.Header>
        <Modal.Body>
          <Row style={{justifyContent: 'center'}}>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="L297P6HH7JG3J" />
              <button type="submit" className="btn btn-block btn-primary" name="submit">PayPal Account</button>
            </form>
          </Row>
            <Divider horizontal>or</Divider>
          <Row style={{justifyContent: 'center'}}>
            <button className="btn btn-primary" onClick={() => this.threemonthly()}>Credit or Debit Card</button>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal centered show={this.state.modalYearly} onHide={() => this.setState({modalMonthly: false})}>
        <Modal.Header>
          <h6><b>Start Your Free Trial with 2 Options!</b></h6>
        </Modal.Header>
        <Modal.Body>
          <Row style={{justifyContent: 'center'}}>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="L297P6HH7JG3J" />
              <button type="submit" className="btn btn-block btn-primary" name="submit">PayPal Account</button>
            </form>
          </Row>
            <Divider horizontal>or</Divider>
          <Row style={{justifyContent: 'center'}}>
            <button className="btn btn-primary" onClick={() => this.yearly()}>Credit or Debit Card</button>
          </Row>
        </Modal.Body>
      </Modal>
      </>
    )
  }
}

export default PricingTable;
