import React from 'react';
import ReactContactForm from 'react-mail-form';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';


export default class ContactForm extends React.Component{
  componentDidMount(){
    window.document.title = "EBU INVEST | FAQ"
  }

  render(){
    return(
      <Container style={{marginTop: 20}}>
        <Image src="/tgeyes.png" fluid={true} style={{borderRadius: 5}} />
        <br /><br />
        <div className="card">
          <div className="card-body">
            <h3><b>Frequently Asked Questions</b></h3>
            <br />
            <h5><b>1. Why do you sell this tool if you can make money with it?</b></h5>
              <div style={{marginTop: 10}}>
                One of us is student and one of us graduated this year, as you can guess we don't have a big capital :) And this tool does not make money by itself, it stil needs a human to take actions.
                However, we made good amounts of money on our scale :) And we are constantly making. <u>To be honest our biggest reason is passive income.</u>
              </div><br /><br />

            <h5><b>2. Does this tool sells and buys automatically?</b></h5>
              <div style={{marginTop: 10}}>
                <b>No,</b> this tool doesn't make auto orders. We tried and we are still trying to. But for now, <b>it's not safe.</b>
              </div><br /><br />

            <h5><b>3. What is about tigers?</b></h5>
              <div style={{marginTop: 10}}>
                <b>We love everything about tigers.</b> The most important thing to know about them as a trader is that <u>every tiger is <b>unique</b> in a lot of way.</u> Point is, in trading to make money you always need to think and act different. Also you need to be agile, patient and awake. To see amazing facts about tigers visit <a href="http://www.animalplanet.com/wild-animals/tigerpedia/tiger-facts-prove-big-cats-amazing/" rel="noopener noreferrer" target="_blank"><b>here.</b></a> <u>We also donate <b>5%</b> of the income we make from here to the tigers.</u> So far, we adopted one tiger. You can see details about the tiger on <a href="https://gifts.worldwildlife.org/gift-center/onlinepremiums/onlinecertificate.aspx?bvin=a034e709-29bf-45c6-a186-6145c23dda99" target="_blank"><b>here</b></a>.
              </div><br /><br />

            <h5><b>4. What happens after I subscribe with PayPal?</b></h5>
              <div style={{marginTop: 10}}>
                After you complete the PayPal process, we will send you an automated mail. And this mail will contain a form link. You need to fill that form out. To fill that form out you need to have a TradingView Account.
                After that we'll send you inviation on TradingView, but don't worry your <u>10 Day Free Trial doesn't start until you accept the inviations.</u>
              </div><br /><br />

            <h5><b>5. Do you only accept PayPal?</b></h5>
              <div style={{marginTop: 10}}>
                <b>Yes,</b> right now we only accept PayPal. But we're working on other payment systems.
              </div><br /><br />

            <h5><b>6. Why do you have free trial?</b></h5>
              <div style={{marginTop: 10}}>
                Because, we believe nobody can know if they're ready for a tool that they never used. And, Guess what?! We don't ghost if you don't buy our product, we still would like to keep in touch with you in another telegram group. In that telegram group we'll try to answer and help any questions you have about the tool or generally about finance. And we will send photos from the tool.
                In past, we had finance chat groups to help other people without any payment or something. We were just accepting donations. That's kinda weird but we like to help and talk with other people about finance :)
              </div><br /><br />

            <h5><b>7. Why Telegram?</b></h5>
              <div style={{marginTop: 10}}>
                We don't know either :) The great advantage about Telegram is that it's not the default chat tool on phones, so, when you go into telegram you just see things about finance. Besides that, it's fast, secure and convenient. Like we said on the previous questions, sometimes giving investment advise to people without a license or company can be a little bit problem on some countries.
              </div><br /><br />

            <h5><b>8. How does alerts(notifications) work?</b></h5>
              <div style={{marginTop: 10}}>
                Basically, if you set an alert with our tool, you'll get notifications on your phone, tablet, computer when our tool finds a new pattern on selected stocks, warrants, commodities, etc. TradingView has their own limit for alerts. You need to see their pricing table to have a good sense about alerts limit. <a href="https://www.tradingview.com/gopro/" rel="noopener noreferrer" target="_blank">Here is the link for pricing table. </a>
                With free account you can just set <u>1 alert.</u> So, that means you can get alert on one stock price or warrant price or commodity price or etc.
              </div><br /><br />

            <h5><b>9. Can I see the patterns on my phone?</b></h5>
              <div style={{marginTop: 10}}>
                <b>Yes,</b> you can see the patterns. You can do whatever you're able to do on computer -not 100% sure-. Thanks to <b>{"TradingView <3"}</b>
              </div><br /><br />

            <h5><b>10. Do you planning to improve the tool?</b></h5>
              <div style={{marginTop: 10}}>
                <b>Yes,</b> after we this power, we can't just stay in our place, right? So, one of our biggest goal is to implement <u>Machine Learning Algorithms</u> to the tool. If we can implement without a problem, tool will be able to classify patterns, so, It'll label risky patterns.
              </div><br /><br />

            <h5><b>11. Does this tool works on CryptoCurrency?</b></h5>
              <div style={{marginTop: 10}}>
                <b>Yes,</b> of course. Our tool it's not limited with a type of currency or something. <u>Because, every calculation we made is based on math.</u> However, our tool works so good on <b>Bitcoin</b>. We have photos on our main page.
              </div><br /><br />

            <h5><b>12. Do you guys share the Source Code after Subscription?</b></h5>
              <div style={{marginTop: 10}}>
                <b>No,</b> we do not. Otherwise this whole story will be meaningless :) However, we would love to help you on your problems about <b><u>PineScript.</u></b> We know that there is not enough source around. So, we are willing to help you about <b><u>PineScript. </u></b>
                You can either join our totally free Telegram Group or you could just send a mail to us. To see both options go <Link to="/reach-us">here.</Link>
              </div><br /><br />

          <span onClick={this.props.history.goBack}><b>{"< Go back "}</b></span>| <Link to="/" style={{textDecoration: 'none', color: "black"}}><b>{"< Go to Main Page"}</b></Link>
        </div>
        </div>
        <br />
      </Container>
    )
  }
}
