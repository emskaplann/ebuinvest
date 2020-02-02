import React from 'react';
import { Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function WhatIsEbuIndicator(){
  return(
    <>
    <Divider style={{color: 'white'}} horizontal>payment flow</Divider>
    <div className="card">
      <div className="card-body">
        <b>What do you need?</b>
        <div style={{marginTop: 5}}><b>1 -</b> <b>Paypal Account</b> or <b>Credit Card</b> or <b>Debit Card.</b><br /></div>
        <div style={{marginTop: 5}}><b>2 -</b> <b><a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">TradingView</a> Account.</b> <u>We suggest you to create before checkout process if you don't have one, <b>because our Indicator only works on <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">TradingView.</a></b></u></div>
        <br />
        <b>How is The Flow?</b>
        <div style={{marginTop: 5}}><b>1 -</b> After you choose and complete the PayPal or Stripe(Credit/Debit) process, we'll send you an automated e-mail that contains a form link.</div>
        <span className="text-muted"><b>Note: <u>You don't need to pay until your free trial ends.</u> <u>And you can cancel any time you want.</u> All we need is for you to subscribe using PayPal or Stripe(Credit/Debit) <u>because we need to track free trials.</u> PayPal or Stripe doesn't share any payment information with merchants.</b></span>
        <div style={{marginTop: 12}}><b>2 -</b> In this step, <u>if you don't have a TradingView Account, you need to register with an account to fill the form.</u> You can sign up <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer"><b>here.</b></a></div>
        <div style={{marginTop: 12}}><b>3 -</b> You need fill the form that we send you through e-mail. <b>You should use the same e-mail address that you used for payment.</b> If you didn't get the e-mail, please contact us from <Link to="/reach-us"><b>here.</b></Link></div>
        <div style={{marginTop: 12}}><b>4 -</b> In the form we ask for basic information like Telegram username, <b><a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">TradingView</a></b> username, etc. We ask Telegram username for <b>Telegram Group</b>, where you can ask anything and where you will meet your <b>new community.</b></div>
        <div style={{marginTop: 12}}><b>5 -</b> Now you should wait for an invitation that will come from <a href="https://www.tradingview.com/u/EbuInvest/" target="_blank" rel="noopener noreferrer"><b>@EbuInvest</b></a> on <b><a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">TradingView.</a></b> The invitation will deliver in less than <b>12 hours.</b> After you get the invitation you can follow our <b><Link to="/how-to">guide</Link></b> to set up and test our indicator. And there are <b>no limitations</b> on the free trial. To see how to set up or take action based on our Indicator, please visit <Link to="/how-to"><b>here.</b></Link></div>
        <div style={{marginTop: 12}}><b>6 -</b> If you still have question(s) please don't hesitate to contact us from <Link to="/reach-us"><b>here.</b></Link> We will try our best to reply ASAP.</div>
      </div>
    </div>
    </>
  )
}
