import React from 'react';
import ReactContactForm from 'react-mail-form';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class ContactForm extends React.Component{
  render(){
    return(
      <Container style={{marginTop: 20}}>
        <div className="card">
          <div className="card-body">
            <h3><b>How to Contact Us?</b></h3>
            You can simply press<a target="_blank" href="mailto:contact@ebuinvest.com?subject=Support - Your Subject" style={{textDecoration: 'none'}}> <b>here</b></a> to compose a mail to us.
            Or you can compose yourself, to this mail address <b>contact@ebuinvest.com.</b><br/>
          <div style={{marginTop: 10}}><a href="" target="_blank">Join our Free Telegram Group for daily insights and to get your questions answered in light speed.</a></div>
          <div style={{marginTop: 10}}>We don't present a contact form on our website because of the spammers 🤖</div><br /><br />
          <span onClick={this.props.history.goBack}><b>{"< Go back "}</b></span>| <Link to="/" style={{textDecoration: 'none', color: "black"}}><b>{"< Go to Main Page"}</b></Link>
        </div>
        </div>
        <br />
          <div id="mc_embed_signup" style={{borderRadius: 5}}>
          <form action="https://ebuinvest.us4.list-manage.com/subscribe/post?u=2f60fef199d823b19d567f7ec&amp;id=ce4caacf66" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
          	<label for="mce-EMAIL">Subscribe to Our TigerLetter!</label>
          	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required />
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_2f60fef199d823b19d567f7ec_ce4caacf66" tabindex="-1" value="" /></div>
              <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </div>
          </form>
          </div>
          <br />
          <br />
      </Container>
    )
  }
}
