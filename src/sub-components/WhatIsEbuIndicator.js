import React from 'react';
import { Divider } from 'semantic-ui-react';
import { Image, ResponsiveEmbed } from 'react-bootstrap';

export default function WhatIsEbuIndicator(){
  return(
    <>
    <Image src="/tgeyes.png" fluid={true} style={{borderRadius: 5}} />
    <Divider style={{color: 'white'}} horizontal>What is EBU Indicator?</Divider>
    <div className="card" id="what-is">

      <div className="card-body">
        <div>
          <ResponsiveEmbed aspectRatio="16by9" style={{borderRadius: 5}}>
            <embed type="video/mp4" src="https://www.youtube.com/embed/tsJe9OswYfM?rel=0" />
          </ResponsiveEmbed>
        </div>
        <br />
        <b>EBU Indicator</b> is a script that finds the most powerful patterns on Finance Charts like <b>Forex</b>, <b>Stock Markets</b>, <b>CryptoCurrencies</b>, <b>Warrants</b>, <b>Commodities</b>, etc.
        <br /><br /> <b>EBU Indicator,</b> helps you understand what is going on within the market. <b>Are there any patterns in the charts?</b> <b>Where should I take a long or short position?</b> <b>EBU Indicator</b> helps you answer these questions, so you can make decisions that will result in profit. <b>EBU Indicator</b> is a powerful tool for technical analysis because it brings <u><b>time and money to your trade.</b></u><br /><br /> <b>With EBU Indicator</b> you can <u><b>catch big breakouts</b></u> in price action, so, you have <u><b>big opportinites</b> to make <b>big profits.</b></u><br />
      <br /> We wrote the script with <b><a href="https://www.tradingview.com/blog/en/introducing-pine-script-4-12626/" target="_blank" rel="noopener noreferrer">Pine Script v4</a></b> and it's only usable on <b><a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">TradingView Platform.</a></b><br /><br />
        In the script, we are using the <b><a href="https://www.investopedia.com/ask/answers/030415/what-zig-zag-indicator-formula-and-how-it-calculated.asp" target="_blank" rel="noopener noreferrer">ZigZag</a></b> and <b><a href="https://www.investopedia.com/ask/answers/05/fibonacciretracement.asp" target="_blank" rel="noopener noreferrer">Fibonacci</a></b> levels for recognizing patterns. The script checks all <u>pivot highs and pivot lows with Fibonacci numbers.</u> Additionally, we know people wonder if it works on different trading strategies. And the <b>answer is yes,</b> our script <u>works without a problem with all kinds of strategies like <b>Day Trading, Swing Trading, etc.</b></u><br /><br />
      <b>Here are the 5 powerful patterns we use in the Indicator:</b><br />
        Click for information about them.
      <ul>
        <li><a href="https://www.investopedia.com/articles/trading/05/040405.asp" target="_blank" rel="noopener noreferrer"><b>Wolfe Wave Pattern</b></a></li>
        <li><a href="https://www.investopedia.com/articles/trading/05/040405.asp" target="_blank" rel="noopener noreferrer"><b>Gartley Pattern</b></a></li>
        <li><a href="https://www.moneyshow.com/articles/daytraders-19518/" target="_blank" rel="noopener noreferrer"><b>Butterfly Pattern</b></a></li>
        <li><a href="https://www.investopedia.com/terms/h/head-shoulders.asp" target="_blank" rel="noopener noreferrer"><b>Head & Shoulders Pattern</b></a></li>
        <li><a href="https://bestbinarytradingbrokers.com/education-and-strategies/contracting-triangles/" target="_blank" rel="noopener noreferrer"><b>Contracting Triangle Pattern</b></a></li>
      </ul>
      <b>Everyday we share up-to-date ideas(screenshots from the indicator) on TradingView.<a href="https://www.tradingview.com/u/EbuInvest/" target="_blank" rel="noopener noreferrer"> Join us on TradingView.</a></b><br />
      <b>Also, you can see our Indicator on TradingView from <a href="https://www.tradingview.com/script/FvncapoU-EBU-Indicator/" target="_blank" rel="noopener noreferrer">here.</a> In order to see(use) on your chart you need to start your free trial. See our pricing in the below section.</b>
      <br /><br />
        The techniques(patterns) we are using are no secrets. The only secret is finding them <b>automatically.</b> Before this script we were finding patterns manually and let us assure you this isn't something you'd want to be dealing with. This is the main reason why we wrote the script.
      <br /><br />
        <div className="text-muted"><b><u>Note: EBU Indicator is not recommended for beginners.</u></b></div>
      <br />
      </div>
    </div>
    </>
  )
}



// <h5><b>EBU Indicator is <u>a script...</u></b></h5>
// ...that will <b>help you on deciding</b> about buying or selling <b>stocks</b>, <b>positions, commodities etc.</b>
// <div style={{marginTop: 5}}>...that you can expect <b>0% - 300% profit rates.</b></div>
// <div style={{marginTop: 5}}>...that you can put on work at any <b>Financial Chart.</b></div>
// <div style={{marginTop: 5}}>...that works <b>only on</b> <b><a href="https://www.tradingview.com/" target="_blank">TradingView Platform.</a></b> Which means you can use <a href="https://www.tradingview.com/" target="_blank">TradingView</a> App with our script <b>on every device.</b></div>
// <div style={{marginTop: 5}}>...that gives you a chance to be part of <b>new community.</b></div>
// <br /><br />
// <h5><b>EBU Indicator is <u>not a script...</u></b></h5>
//   ...once you put on chart that will make money for you! Please do not think as "this is a script <b>that makes money by itself.</b>"<br />
// <div style={{marginTop: 5}}>...that makes billions <b>if you don't have any.</b></div>
// <div style={{marginTop: 5}}>...that works on <b>MetaTrader Platform.</b></div>
