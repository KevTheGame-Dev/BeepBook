import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

//General
import Header from './GeneralComponents/Header.js';
import Footer from './GeneralComponents/Footer';

//Pages
import ChatPage from './Pages/ChatPage/ChatPage.js';
import AboutPage from './Pages/AboutPage/AboutPage.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={ChatPage}/>
          <Route path='/about' component={AboutPage}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;