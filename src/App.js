import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import {IntlProvider} from 'react-intl';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactUs from './containers/ContactUs';

function App() {
  return (
//    <IntlProvider locale="cn" messages={{'nav.dashboard' : '欢迎'}}>
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact-us"  component={ContactUs}></Route>
      </div>
    </Router>
//    </IntlProvider>   
  );
}

export default App;
