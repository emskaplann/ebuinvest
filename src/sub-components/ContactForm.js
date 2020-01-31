import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import JoinUs from '../sub-components/JoinUs.js';

export default class ContactForm extends React.Component{

  componentDidMount(){
    window.document.title = "EBU INVEST | Contact Us"
  }

  render(){
    return(
      <Container style={{marginTop: 20}}>
        <div className="card">
          <div className="card-body">
            <h3><b>How to Contact Us?</b></h3>
            You can simply press<a target="_blank" rel="noopener noreferrer" href="mailto:contact@ebuinvest.com?subject=Support - Your Subject" style={{textDecoration: 'none'}}> <b>here</b></a> to compose a mail to us.
            Or you can compose yourself, to this mail address <b>contact@ebuinvest.com.</b> Or you can try the chat box you see on the left down corner.<br/>
          <div style={{marginTop: 10}}><a href="https://t.me/joinchat/NeUKX1EKpn9Bk03V2JldlA" rel="noopener noreferrer" target="_blank"><b>Join our Free Telegram Group for daily insights and to get your questions answered in light speed.</b></a></div>
          <div style={{marginTop: 10}}>We don't present a contact form on our website because of the spammers.</div>
          <div className="text-muted" style={{marginTop: 10}}><b><u>Note: Please send a mail for inquires about multiple account pricing.</u></b></div><br /><br />

          <span onClick={this.props.history.goBack}><b>{"< Go back "}</b></span>| <Link to="/" style={{textDecoration: 'none', color: "black"}}><b>{"< Go to Main Page"}</b></Link>
        </div>
        </div>
        <br />
          <div id="mc_embed_signup" style={{borderRadius: 5}}>
          <form action="https://ebuinvest.us4.list-manage.com/subscribe/post?u=2f60fef199d823b19d567f7ec&amp;id=ce4caacf66" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" rel="noopener noreferrer" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
          	<h4><b>Subscribe to Our TigerLetter!</b></h4>
            <span>We will send you weekly content about how to become a Tiger on market.</span><br /><br />
          	 <input type="email" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required />
            <div style={{position: 'absolute', left: '-5000px'}} ariaHidden="true"><input type="text" name="b_2f60fef199d823b19d567f7ec_ce4caacf66" tabIndex="-1" value="" /></div>
              <div className="clear">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
              </div>
            </div>
          </form>
          </div>
          <JoinUs />
          <br />
          <Image src="/tgroar.jpeg" fluid={true} style={{borderRadius: 5}} />
          <br /><br />
      </Container>
    )
  }
}
