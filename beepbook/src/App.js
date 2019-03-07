import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

//General
import Header from './GeneralComponents/Header/Header.js';
import Footer from './GeneralComponents/Footer/Footer.js';
import AlphaWarning from './GeneralComponents/AlphaWarning/AlphaWarning.js';
import LogInPopUp from './GeneralComponents/LogInPopUp/LogInPopUp.js';
import CreateAccountPopUp from './GeneralComponents/CreateAccountPopUp/CreateAccountPopUp.js';

//Pages
import ChatPage from './Pages/ChatPage/ChatPage.js';
import AboutPage from './Pages/AboutPage/AboutPage.js';


class App extends Component {
  constructor(props){
    super(props)

    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
    this.displayLogInPopUp = this.displayLogInPopUp.bind(this);
    this.displayCreateAccountPopUp = this.displayCreateAccountPopUp.bind(this);

    this.state = {
      backendIP: 'http://localhost:5000/', //THIS IS TEMPORARY FOR DEV

      loggedIn: false,
      displayLogIn: false,
      logInError: null,

      displayCreateAccount: false,
      createAccountError: null,
    }
  }

  //Log In/Out functions
  handleLogIn(e, email, password){
    e.preventDefault();
    console.log(email);
    let success = true;
    if(success){
      this.setState({loggedIn: true, displayLogIn: false});
    }
    else{
      this.setState({logInError: 'Log in failed!'});
    }
  }

  handleLogOut(){
    this.setState({loggedIn: false});
  }

  handleCreateAccount(e, email, password, name){
    e.preventDefault();
    let success = true;
    if(success){
      this.setState({loggedIn: true, displayCreateAccount: false});
    }
    else{
      this.setState({createAccountError: 'Create account failed!'});
    }
  }

  displayLogInPopUp(){
    this.setState({displayLogIn: true});
  }

  displayCreateAccountPopUp(){
    this.setState({displayCreateAccount: true, displayLogIn: false});
  }



  render() {
    return (
      
    <BrowserRouter>
      <div className="App">
        <LogInPopUp displayLogIn={this.state.displayLogIn} logInError={this.state.logInError}
          onSubmit={this.handleLogIn} displayCreateAccountPopUp={this.displayCreateAccountPopUp}/>
        <CreateAccountPopUp displayCreateAccount={this.state.displayCreateAccount} createAccountError={this.state.createAccountError}
          onSubmit={this.handleCreateAccount}/>
        <Header loggedIn={this.state.loggedIn} displayLogInPopUp={this.displayLogInPopUp} handleLogOut={this.handleLogOut}/>
        <AlphaWarning/>
        <div>
          <Switch>
            <Route exact path='/' component={ChatPage}/>
            <Route path='/about' component={AboutPage}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;