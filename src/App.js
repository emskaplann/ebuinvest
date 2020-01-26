import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './main-components/IndexPage.js'
import PaymentSuccessfulPage from './main-components/PaymentSuccessfulPage.js'
import NavbarView from './sub-components/NavbarView.js'
import { connect } from 'react-redux';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import ContactForm from './sub-components/ContactForm.js';
import AboutUs from './main-components/AboutUs.js';
import Pricing from './main-components/Pricing.js'
import BecomeAnAffiliate from './main-components/BecomeAnAffiliate.js';
import FAQ from './main-components/FAQ.js';
import HowTo from './main-components/HowTo.js';
import Screenshots from './main-components/Screenshots.js';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';
import $ from 'jquery';
import { Image } from 'react-bootstrap';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.setState({loading: false})
  }



  render(){
    console.log(this.state.loading)
    if(this.state.loading){
      return(
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    } else {
      return (
        <>
        <NavbarView />
         <Switch>
           <Route exact path='/' component={IndexPage} key='index' />
           <Route exact path='/about-us' component={AboutUs} key='about-us' />
           <Route exact path='/reach-us' component={ContactForm} key='contact-us' />
           <Route exact path='/pricing' component={Pricing} key='contact-us' />
           <Route exact path='/how-to' component={HowTo} key='how-to' />
           <Route exact path='/faq' component={FAQ} key='FAQ' />
           <Route exact path='/screenshots' component={Screenshots} key='FAQ' />
           <Route exact path='/become-an-affiliate' component={BecomeAnAffiliate} key='become-an-affiliate' />
           <Route path='/payment-successful/:subId' component={PaymentSuccessfulPage} key='index' />
        </Switch>
         <ScrollUpButton style={{marginBottom: 30}}/>
         </>
      );
    }
  }
}

export default App;
