import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './main-components/IndexPage.js'
import PaymentSuccessfulPage from './main-components/PaymentSuccessfulPage.js'
import NavbarView from './sub-components/NavbarView.js'
import { connect } from 'react-redux';
import './App.css';

function App() {
  return (
    <>
    <NavbarView />
     <Switch>
       <Route exact path='/' component={IndexPage} key='index' />
       <Route path='/payment-successful/:subId' component={PaymentSuccessfulPage} key='index' />
     </Switch>
     </>
  );
}

export default App;
