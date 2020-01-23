import React from 'react';
import { Divider } from 'semantic-ui-react';

class PricingTable extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <section className="pricing py-5">
        <div className="container">
          <Divider style={{color: 'white'}} horizontal>EBU Indicator Pricing</Divider>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">1 Month Upfront</h5>
                  <h6 className="card-price text-center">$54.99<span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Wolfe Wave Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Butterfly Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Gartley Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Contracting Triangle</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Head & Shoulders Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Telegram Group with All Users</li>
                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>1/1 Support</li>
                  </ul>
                  <a href="#" className="btn btn-block btn-primary text-uppercase">Try Free</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body" style={{borderTop: "5px solid #33AEFF", borderBottom: "5px solid #33AEFF", borderRadius: '1rem'}}>
                  <h5 className="card-title text-muted text-uppercase text-center">3 Month Upfront</h5>
                  <h6 className="card-price text-center">$49.99<span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Wolfe Wave Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Butterfly Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Gartley Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Contracting Triangle</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Head & Shoulders Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Telegram Group with All Users</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>1/1 Support</li>
                  </ul>
                  <a href="#" className="btn btn-block btn-primary text-uppercase">Try Free</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">1 Year Upfront</h5>
                  <h6 className="card-price text-center">$39.99<span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Wolfe Wave Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Butterfly Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Gartley Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Contracting Triangle</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Head & Shoulders Indicator</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Telegram Group with All Users</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>1/1 Support</li>
                  </ul>
                  <a href="#" className="btn btn-block btn-primary text-uppercase">Try Free</a>
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
