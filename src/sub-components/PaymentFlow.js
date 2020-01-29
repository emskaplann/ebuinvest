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
        <div style={{marginTop: 5}}><b>2 -</b> <b>TradingView Account.</b> <u>We suggest you to create before checkout process if you don't have one, <b>because our Indicator only works on TradingView.</b></u></div>
        <br />
        <b>How is The Flow?</b>
        <div style={{marginTop: 5}}><b>1 -</b> After you choose and complete the PayPal or Stripe(Credit/Debit) process, we'll send you an automated e-mail that contains a form link.</div>
        <span className="text-muted"><b>Note: <u>You don't pay anything until Free Trial ends.</u> <u>And you cancel any time you want.</u> We just need you to subscribe with PayPal or Stripe(Credit/Debit) <u>because we need to track free trials.</u> Therefore, PayPal or Stripe doesn't share any Payment Information with Merchants.</b></span>
        <div style={{marginTop: 12}}><b>2 -</b> In this step, <u>if you don't have a TradingView Account, you need to open an account to fill the form.</u> You can open the account from <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer"><b>here.</b></a></div>
        <div style={{marginTop: 12}}><b>3 -</b> You need fill the form that we send you with the e-mail. <b>And keep in mind you should put the e-mail address that you have on PayPal Account or the e-mail address you put on Stripe(Credit/Debit).</b> If you didn't get the mail, please contact us from <Link to="/reach-us"><b>here.</b></Link></div>
        <div style={{marginTop: 12}}><b>4 -</b> In the form we ask for basic information like Telegram username, TradingView username, etc... We ask Telegram for <b>Telegram Group</b>, where you can ask anything and where you meet your <b>new community.</b></div>
        <div style={{marginTop: 12}}><b>5 -</b> After you get the invitation you can follow our <b><Link to="/how-to">guide</Link></b> to setup and test our indicator. And there is <b>no limitations</b> on Free Trial. To see how to setup or take actions based on our Indicator, please visit <Link to="/reach-us"><b>here.</b></Link></div>
        <div style={{marginTop: 12}}><b>6 -</b> If you still have question(s) please don't hesitate to contact us from <Link to="/reach-us"><b>here.</b></Link> We will try our best to reply ASAP.</div>
      </div>
    </div>
    </>
  )
}
