import React from 'react';
import { Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
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
              We have <b>3 different subscription options for different budgets.</b> For companies who would need to subscribe <b>to multiple accounts, we offer a special price with a discount and a <u>30 Day Free Trial.</u></b>  If you have any further questions about pricing or would like to get a price for multiple accounts please contact us from <Link to="/reach-us"><b>here.</b></Link>
            </div>
          </div>
          <br />
          <h2 style={{fontWeight: 900, textAlign: 'center', color: "#ffffff"}}>10 Day Free Trial</h2>
          <br />
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Monthly Subscription</h5>
                  <h6 className="card-price text-center">$49.99<span className="period">/month</span></h6>
                  <h6 className="card-title text-muted text-uppercase text-center"><strike>$59.99</strike><span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Alerts(Notifications)</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Wolfe Wave Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Butterfly Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Gartley Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Contracting Triangle Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Head & Shoulders Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>1/1 Support</li>
                  </ul>
                    <button className="btn btn-block btn-primary text-uppercase" onClick={() => this.setState({modalMonthly: true})}>Try Free</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">3 monthly subscription</h5>
                  <h6 className="card-price text-center">$44.99<span className="period">/month</span></h6>
                  <h6 className="card-title text-muted text-uppercase text-center"><strike>$54.99</strike><span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Alerts(Notifications)</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Wolfe Wave Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Butterfly Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Gartley Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Contracting Triangle Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Head & Shoulders Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>1/1 Support</li>
                  </ul>
                  <button className="btn btn-block btn-primary text-uppercase" onClick={() => this.setState({modal3Monthly: true})}>Try Free</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Yearly Subscription</h5>
                  <h6 className="card-price text-center">$34.99<span className="period">/month</span></h6>
                  <h6 className="card-title text-muted text-uppercase text-center"><strike>$44.99</strike><span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Alerts(Notifications)</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Wolfe Wave Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Butterfly Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Gartley Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Contracting Triangle Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Head & Shoulders Patterns</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>1/1 Support</li>
                  </ul>
                  <button className="btn btn-block btn-primary text-uppercase" onClick={() => this.setState({modalYearly: true})}>Try Free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal centered show={this.state.modalMonthly} onHide={() => this.setState({modalMonthly: false})}>
        <Modal.Header closeButton>
          <h5><b>EBU Indicator - Monthly Plan - $49.99/month</b></h5>
        </Modal.Header>
        <Modal.Body>
          <div>
            Our checkout process does not happen on our website. After you click one of these buttons you will be redirected to either PayPal's Checkout Page or Stripe's Checkout Page. When you complete the process, we will send you an automated e-mail. See more details on the <b>Payment Flow</b> section located below the pricing table.
          </div>
          <span className="text-muted"><b><u>Note: You do not have to create an account if you choose</u></b></span> <b><u>Stripe.</u></b>
        </Modal.Body>
        <Modal.Footer>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="L297P6HH7JG3J" />
            <button type="submit" className="btn btn-block btn-primary" name="submit">PayPal Account</button>
          </form>
          <button className="btn btn-primary" onClick={() => this.monthly()}>Credit or Debit Card(Stripe)</button>
        </Modal.Footer>
      </Modal>

      <Modal centered show={this.state.modal3Monthly} onHide={() => this.setState({modal3Monthly: false})}>
        <Modal.Header closeButton>
          <h5><b>EBU Indicator - 3 Monthly Plan - $44.99/month</b></h5>
        </Modal.Header>
        <Modal.Body>
          <div>
            Our checkout process does not happen on our website. After you click one of these buttons you will be redirected to either PayPal's Checkout Page or Stripe's Checkout Page. When you complete the process, we will send you an automated e-mail. See more details on the <b>Payment Flow</b> section located below the pricing table.
          </div>
          <span className="text-muted"><b><u>Note: You do not have to create an account if you choose</u></b></span> <b><u>Stripe.</u></b>
        </Modal.Body>
        <Modal.Footer>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="PKZ7EZYAF9722" />
            <button type="submit" className="btn btn-block btn-primary" name="submit">PayPal Account</button>
          </form>
          <button className="btn btn-primary" onClick={() => this.threeMonthly()}>Credit or Debit Card(Stripe)</button>
        </Modal.Footer>
      </Modal>

      <Modal centered show={this.state.modalYearly} onHide={() => this.setState({modalYearly: false})}>
        <Modal.Header closeButton>
          <h5><b>EBU Indicator - Yearly Plan - $34.99/month</b></h5>
        </Modal.Header>
        <Modal.Body>
          <div>
            Our checkout process does not happen on our website. After you click one of these buttons you will be redirected to either PayPal's Checkout Page or Stripe's Checkout Page. When you complete the process, we will send you an automated e-mail. See more details on the <b>Payment Flow</b> section located below the pricing table.
          </div>
          <span className="text-muted"><b><u>Note: You do not have to create an account if you choose</u></b></span> <b><u>Stripe.</u></b>
        </Modal.Body>
        <Modal.Footer>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="AEF5UPCKKAFHJ" />
            <button type="submit" className="btn btn-block btn-primary" name="submit">PayPal Account</button>
          </form>
          <button className="btn btn-primary" onClick={() => this.yearly()}>Credit or Debit Card(Stripe)</button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}

export default PricingTable;
