import React from 'react';
import { Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PricingTable extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <section className="pricing py-5" id="pricing">
        <div className="container">
          <Divider style={{color: 'white'}} horizontal>EBU Indicator Pricing</Divider>
          <div className="card">
            <div className="card-body">
              We have <b>3 different subscription options according the different budgets.</b> For companies who needs to buy <b>for multiple accounts we offer a discounted special price with <u>30 Day Free Trial.</u></b>  If you have any further questions about pricing or you want a get a price for multiple accounts please contact us from <Link to="/reach-us"><b>here.</b></Link>
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
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="L297P6HH7JG3J" />
                    <button type="input" className="btn btn-block btn-primary text-uppercase" name="submit">Try Free</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body" style={{borderTop: "5px solid #33AEFF", borderBottom: "5px solid #33AEFF", borderRadius: '1rem'}}>
                  <h5 className="card-title text-muted text-uppercase text-center">3 month subscription</h5>
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
    )
  }
}

export default PricingTable;
