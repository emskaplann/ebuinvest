import React from 'react';
import { Divider } from 'semantic-ui-react';

export default function WhatIsEbuIndicator(){
  return(
    <>
    <Divider style={{color: 'white'}} horizontal>payment flow</Divider>
    <div className="card">
      <div className="card-body">
        <b>What you need?</b>
        <div style={{marginTop: 5}}><b>1 -</b> Paypal Account or Credit Cart or Bank Cart.<br /></div>
        <div style={{marginTop: 5}}><b>2 -</b> TradingView Account.</div>
        <br />
        <b>How is The Flow?</b>
        <div style={{marginTop: 5}}><b>1 -</b> After you click on button and start the free trial, we send you an e-mail that contains an invite link to <b>EBU Indicator - TradingView.</b></div>
        <div style={{marginTop: 5}}><b>2 -</b> With the link you get you can follow our <b>guide</b> to setup and test our indicator. And there is <b>no limitations</b> on Free Trial.</div>
        <div style={{marginTop: 5}}><b>3 -</b> If you still have question(s) or didn't understand a part please contact us from <b>contact@ebuinvest.com</b>. We will try to reply ASAP.</div>
      </div>
    </div>
    </>
  )
}
