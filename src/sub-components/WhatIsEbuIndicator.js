import React from 'react';
import { Divider } from 'semantic-ui-react';

export default function WhatIsEbuIndicator(){
  return(
    <>
    <Divider style={{color: 'white'}} horizontal>What is EBU Indicator?</Divider>
    <div className="card">
      <div className="card-body">
        <b>EBU Indicator</b> is a script that finds most powerful patterns on Finance Charts like <b>Forex</b>, <b>Stock Markets</b>, <b>Warrants</b> etc.<br /><br /> We wrote the script with <b><a href="https://www.tradingview.com/blog/en/introducing-pine-script-4-12626/" target="_blank">Pine Script v4</a></b> and it's just usable on <b><a href="https://www.tradingview.com/" target="_blank">TradingView Platform.</a></b><br /><br />
        In script we are using the <b><a href="https://www.investopedia.com/ask/answers/030415/what-zig-zag-indicator-formula-and-how-it-calculated.asp" target="_blank">ZigZag</a></b> and <b><a href="https://www.investopedia.com/ask/answers/05/fibonacciretracement.asp" target="_blank">Fibonacci</a></b> levels for recognizing patterns. The script checks all pivot highs and pivot lows with Fibonacci numbers. If the functions that is located on script are true, script draws the pattern lines automatically.<br /><br />
      <div className="text-muted"><b><u>Note: EBU Indicator is recommended for people who are not totally alien to subject. But still, everyone can learn!</u></b></div>
      <br />
        The techniques(patterns) we are using are not a secret. Only secret is finding those <b>automatically.</b> Before this script we were looking and finding patterns manually and we can tell it's not a thing you want to do constantly. This is basically the main reason that why we wrote the script.
      <br /><br />
      <h5><b>EBU Indicator is <u>a script...</u></b></h5>
      ...that will <b>help you on deciding</b> about buying or selling <b>stocks</b>, <b>positions, commodities etc.</b>
      <div style={{marginTop: 5}}>...that you can expect <b>0% - 300% profit rates.</b></div>
      <div style={{marginTop: 5}}>...that you can put on work at any <b>Financial Chart.</b></div>
      <div style={{marginTop: 5}}>...that works <b>only</b> on <b>TradingView Platform.</b></div>
      <div style={{marginTop: 5}}>...that gives you a chance to be part of <b>new community.</b></div>
      <br /><br />
      <h5><b>EBU Indicator is <u>not a script...</u></b></h5>
        ...once you put on chart that will make money for you! Please do not think as "this is a script <b>that makes money by itself.</b>"<br />
      <div style={{marginTop: 5}}>...that makes billions <b>if you don't have any.</b></div>
      <div style={{marginTop: 5}}>...that works on <b>MetaTrader Platform.</b></div>
      </div>
    </div>
    </>
  )
}