import React from 'react';
import { Divider } from 'semantic-ui-react';

export default function WhatIsEbuIndicator(){
  return(
    <>
    <Divider style={{color: 'white'}} horizontal>payment flow</Divider>
    <div className="card">
      <div className="card-body">
        <b>What do you need?</b>
        <div style={{marginTop: 5}}><b>1 -</b> Paypal Account or Credit Cart or Bank Cart.<br /></div>
        <div style={{marginTop: 5}}><b>2 -</b> TradingView Account.</div>
        <br />
        <b>How is The Flow?</b>
        <div style={{marginTop: 5}}><b>1 -</b> After you click on button and start the free trial, we send you an e-mail that contains an invite link to <b>EBU Indicator - TradingView.</b></div>
        <div style={{marginTop: 2}} className="text-muted"><b>Note: <u>You don't pay anything until Free Trial ends.</u> <u>And you cancel any time you want.</u></b></div>
        <div style={{marginTop: 5}}><b>2 -</b> In the e-mail you'll also find an another link for <b>Telegram Group</b>, where you can ask anything and where you meet your <b>new community.</b></div>
        <div style={{marginTop: 5}}><b>3 -</b> With the link you get you can follow our <b>guide</b> to setup and test our indicator. And there is <b>no limitations</b> on Free Trial.</div>
        <div style={{marginTop: 5}}><b>4 -</b> If you still have question(s) please don't hesitate to contact us from <b>contact@ebuinvest.com</b>. We will try our best to reply ASAP.</div>
      </div>
    </div>
    </>
  )
}
