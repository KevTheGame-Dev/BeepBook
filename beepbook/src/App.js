import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

//General
import Header from './GeneralComponents/Header/Header.js';
import Footer from './GeneralComponents/Footer/Footer.js';
import AlphaWarning from './GeneralComponents/AlphaWarning/AlphaWarning.js';

//Pages
import ChatPage from './Pages/ChatPage/ChatPage.js';
import AboutPage from './Pages/AboutPage/AboutPage.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AlphaWarning />
        <div>
          <Switch>
            <Route exact path='/' component={ChatPage}/>
            <Route path='/about' component={AboutPage}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;