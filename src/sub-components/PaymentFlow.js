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
        <div style={{marginTop: 5}}><b>1 -</b> Paypal Account. If you don't have one <b>you can create</b> at the checkout process.<br /></div>
        <div style={{marginTop: 5}}><b>2 -</b> TradingView Account. We suggest you create before starting your free trial.</div>
        <br />
        <b>How is The Flow?</b>
        <div style={{marginTop: 5}}><b>1 -</b> After you click on button and complete the PayPal process, we'll send you an automated e-mail that contains a form link.</div>
        <span className="text-muted"><b>Note: <u>You don't pay anything until Free Trial ends.</u> <u>And you cancel any time you want.</u></b> We just need you to subscribe with PayPal because we need to track free trials. Therefore, PayPal doesn't share any Payment Information with Merchants.</span>
        <div style={{marginTop: 5}}><b>2 -</b> In this step, <u>if you don't have a TradingView Account, you need to open an account to fill the form.</u> You can open the account from <a href="https://www.tradingview.com/" target="_blank">here.</a></div>
        <div style={{marginTop: 5}}><b>3 -</b> You need fill the form that we send you with the e-mail. <b>And keep in mind you should put the e-mail address that you have PayPal account on.</b></div> If you didn't get the mail, please contact us from <Link to="/reach-us">here.</Link>
        <div style={{marginTop: 5}}><b>4 -</b> In the form we ask for basic information like Telegram username, TradingView username, etc... We ask Telegram for <b>Telegram Group</b>, where you can ask anything and where you meet your <b>new community.</b></div>
        <div style={{marginTop: 5}}><b>5 -</b> With the link you get you can follow our <b>guide</b> to setup and test our indicator. And there is <b>no limitations</b> on Free Trial.</div>
        <div style={{marginTop: 5}}><b>6 -</b> If you still have question(s) please don't hesitate to contact us from <b>contact@ebuinvest.com</b>. We will try our best to reply ASAP.</div>
      </div>
    </div>
    </>
  )
}
