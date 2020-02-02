import React from 'react';
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
                One of us is a student and one of us graduated this year, as you can guess we don't have a big capital :) And this tool does not make money by itself, it still needs a human to take action.
                However, we made a decent amount of money on our scale :) And we are continuing to do so. <u>To answer your question, we sell it in order to create a passive income.</u>
              </div><br /><br />

            <h5><b>2. Does this tool sell and buy automatically?</b></h5>
              <div style={{marginTop: 10}}>
                <b>No,</b> this tool doesn't make auto orders. We've tried and we are still trying to figure it out. But for now, <b>it's not safe.</b>
              </div><br /><br />

            <h5><b>3. What is it about tigers?</b></h5>
              <div style={{marginTop: 10}}>
                <b>We love everything about tigers.</b> The most important thing to know about them as a trader is that <u>every tiger is <b>unique</b> in a lot of way.</u> Point is, in trading to make money you always need to think and act different. Also you need to be agile, patient and awake. To see amazing facts about tigers visit <a href="http://www.animalplanet.com/wild-animals/tigerpedia/tiger-facts-prove-big-cats-amazing/" rel="noopener noreferrer" target="_blank"><b>here.</b></a> <u>We also donate <b>5%</b> of the income we make from here to tigers in the wild.</u> So far, we adopted one tiger. You can see details about the tiger on <a href="https://gifts.worldwildlife.org/gift-center/onlinepremiums/onlinecertificate.aspx?bvin=a034e709-29bf-45c6-a186-6145c23dda99" rel="noopener noreferrer" target="_blank"><b>here</b></a>.
              </div><br /><br />

            <h5><b>4. What happens after I subscribe with PayPal or Stripe(Credit/Debit)?</b></h5>
              <div style={{marginTop: 10}}>
                After you complete the PayPal or Stripe process, we will send you an automated e-mail. And this e-mail will contain a link to a form. You need to fill that form out. In order to fill that form out you need to have a <b><u>TradingView Account.</u></b>
              <span> </span>After that we'll send you an invitation on TradingView, in the meantime you can checkout our <Link to="/how-to"><b>guides.</b></Link>
              </div><br /><br />

            <h5><b>5. Do you accept every type of payment?</b></h5>
              <div style={{marginTop: 10}}>
                <b>Yes,</b> right now we accept both PayPal Accounts and Credit/Debit cards via Stripe.
              </div><br /><br />

            <h5><b>6. How can I unsubscribe?</b></h5>
              <div style={{marginTop: 10}}>
                <h6><b>PayPal Subscriptions</b></h6>
                You can simply get all the information you need from PayPal. Please click <a href="paypal.com/us/smarthelp/article/how-do-i-cancel-a-billing-agreement,-automatic-recurring-payment-or-subscription-on-paypal-faq2254" target="_blank" rel="noopener noreferrer"><b>here.</b></a>
                <br />
                <span className="text-muted"><b><u>Note: This is an PayPal issue but if you don't cancel your subscription 1 day before the payment due, it is most likely the transaction will occur. In this case, you just need to contact us so we can refund your payment. We don't have a refund policy but if you simply ask us, we will get it done.</u></b></span>
                <br /><br />
                <h6><b>Stripe(Credit/Debit) Subscriptions</b></h6>
                In order to cancel your Stripe(Credit/Debit) Subscription, you just need to send us a mail that says, "I want to unsubscribe." or a similar phrase.
                <br /><br />
                For any further question(s), please contact us from <b><Link to="/reach-us">here.</Link></b>
             </div><br />

           <h5><b>7. Why do you have a free trial?</b></h5>
              <div style={{marginTop: 10}}>
                Because, we believe nobody can know if they're ready for a tool that they've never used. And, Guess what?! We don't ghost if you don't buy our product, we still would like to keep in touch with you in another telegram group. In that telegram group we'll try to answer and help any questions you have about the tool or finance in general. And we will send screenshots of the tool in process.
                In the past, we have had finance chat groups to help other people without any payments. We were accepting donations. Unlike some, we like to help and talk with people about finance.</div><br /><br />

            <h5><b>8. Why Telegram?</b></h5>
              <div style={{marginTop: 10}}>
                We don't know either :) The great advantage of Telegram is that it's not the default chat tool on phones, so, when you go into telegram you only see things about finance. Besides that, it's fast, secure and convenient. Like we mentioned on the previous question, giving investment advice to people without a license can be a little bit of a problem in some countries.
              </div><br /><br />

            <h5><b>9. How does alerts(notifications) work?</b></h5>
              <div style={{marginTop: 10}}>
                Basically, if you set an alert with our tool, you'll get notifications on your phone, tablet, computer when our tool finds a new pattern on selected stocks, warrants, commodities, etc. TradingView has their own limit for alerts. You need to see their pricing table to have a good sense about alert limits. <a href="https://www.tradingview.com/gopro/" rel="noopener noreferrer" target="_blank"><b>Here is the link for pricing table. </b></a>
              With a free account you can only set <u>1 alert.</u> So that means you can get an alert on one stock price or warrant price or commodity price or etc.
              </div><br /><br />

            <h5><b>10. Can I see the patterns on my phone?</b></h5>
              <div style={{marginTop: 10}}>
                <b>Yes,</b> you can see the patterns. You can do whatever you're able to do on your computer -not 100% sure-. Thanks to <b>{"TradingView <3"}</b>
              </div><br /><br />

            <h5><b>11. Do you plan on improving the tool?</b></h5>
              <div style={{marginTop: 10}}>
                <b>Yes,</b> after we witnessing this force, we can't just stay in our place, right? So, one of our biggest goals is to implement <b><u>Machine Learning Algorithms</u></b> to the tool. If we can implement without a problem, our tool will be able to classify patterns. So it will label risky patterns. With a classifier like that we can trust more on auto-orders. That being said, we still need time.<br />
                <span className="text-muted"><b><u>Note: You are more than welcome for suggestions about tool.</u></b></span>
              </div><br /><br />

            <h5><b>12. Does this tool work on CryptoCurrency?</b></h5>
              <div style={{marginTop: 10}}>
                <b>Yes,</b> of course. Our tool is not limited to a type of currency. <u>Because, every calculation we make is <b>based on math.</b></u> We also highly recommend our tool for <b>Bitcoin</b>.
              </div><br /><br />

            <h5><b>13. Do you guys share the Source Code after Subscription?</b></h5>
              <div style={{marginTop: 10}}>
                <b>No,</b> we do not. However, we would love to help you on your problems about <b><u>PineScript.</u></b> We know that there are not enough sources to go around. So, we are willing to help you with <b><u>PineScript. </u></b>
                You can either join our totally free Telegram Group or you could just send an e-mail to us. To see both options go <Link to="/reach-us"><b>here.</b></Link>
              </div><br /><br />

          <span onClick={this.props.history.goBack}><b>{"< Go back "}</b></span>| <Link to="/" style={{textDecoration: 'none', color: "black"}}><b>{"< Go to Main Page"}</b></Link>
        </div>
        </div>
        <br />
      </Container>
    )
  }
}
