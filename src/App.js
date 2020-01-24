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
import BecomeAnAffiliate from './main-components/BecomeAnAffiliate.js';

import './App.css';

function App() {
  return (
    <>
    <NavbarView />
     <Switch>
       <Route exact path='/' component={IndexPage} key='index' />
       <Route exact path='/about-us' component={AboutUs} key='about-us' />
       <Route exact path='/reach-us' component={ContactForm} key='contact-us' />
       <Route exact path='/become-an-affiliate' component={BecomeAnAffiliate} key='become-an-affiliate' />
       <Route path='/payment-successful/:subId' component={PaymentSuccessfulPage} key='index' />
    </Switch>
     <ScrollUpButton style={{marginBottom: 50}}/>
     </>
  );
}

export default App;
