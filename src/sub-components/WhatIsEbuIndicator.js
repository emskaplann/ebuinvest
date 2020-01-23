import React from 'react';
import { Divider } from 'semantic-ui-react';

export default function WhatIsEbuIndicator(){
  return(
    <>
    <Divider style={{color: 'white'}} horizontal>What is EBU Indicator?</Divider>
    <div className="card">
      <div className="card-body">
        <b>EBU Indicator</b> is a script that finds most powerful patterns on Finance Charts like <b>Forex</b>, <b>Stock Markets</b>, <b>Warrants</b> etc.<br /><br /> We wrote the script with <a href="https://www.tradingview.com/blog/en/introducing-pine-script-4-12626/" target="_blank">Pine Script v4</a> and it's just usable on <a href="https://www.tradingview.com/" target="_blank">TradingView Platform.</a><br /><br />
        In script we are using the <b>ZigZag</b> and <b>Fibonacci</b> levels for recognizing patterns. The script checks all pivot highs and pivot lows with Fibonacci numbers. If the functions that is located on script are true, script draws the pattern lines automatically.<br />
      <br />
        The techniques(patterns) we are using are not a secret. Only secret is finding those <b>automatically.</b>
      <br /><br />
      <h5><b>EBU Indicator is <u>a script...</u></b></h5>
      ...that will <b>help you on deciding</b> on buying or selling <b>stocks</b>, <b>positions, commodities etc.</b>
      <div style={{marginTop: 5}}>...that you can expect <b>0% - 300% profit rates.</b></div>
      <div style={{marginTop: 5}}>...that you can put on work at any <b>Financial Chart.</b></div>
      <div style={{marginTop: 5}}>...that works on <b>TradingView Platform.</b></div>
      <br /><br />
      <h5><b>EBU Indicator is <u>not a script...</u></b></h5>
        ...once you put on chart that will make money for you! Please do not think as "this is a script <b>that makes money by itself.</b>"<br />
      <div style={{marginTop: 5}}>...that makes billions <b>unless</b> if you have billions.</div>
      <div style={{marginTop: 5}}>...that works on <b>MetaTrader Platform.</b></div>
      </div>
    </div>
    </>
  )
}
