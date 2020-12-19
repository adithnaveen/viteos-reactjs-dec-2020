import React, { Component } from 'react'

import './App.css';
import AppClickComponent from './AppClickComponent';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import IncDec from './IncDec';

class App extends Component {
  render() {
    const message = "Hello World";
    const name = "Vivek";

    const footerProps = {
      website:"http://viteos.com", 
      copyright:"Viteso Inc.,", 
      year:2020
    }; 

    return <div className="App">
      <AppHeader title="Viteos Technologies Pvt Ltd.," createdBy="Jeevan" />
        <h1>{message} from {name} in App.js</h1>
        <hr /> 
        <AppClickComponent /> 
        <hr /> 
        <IncDec /> 
      <AppFooter {...footerProps} /> 
    </div>
  }
}


export default App;