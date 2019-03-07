import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

import LogInButton from './LogInButton/LogInButton.js';
import LogOutButton from './LogOutButton/LogOutButton.js';

class Header extends Component {
    constructor(props){
        super(props);

        this.displayLogInPopUp = props.displayLogInPopUp;
        this.handleLogOut = props.handleLogOut;
    }

    render() {
        const loggedIn = this.props.loggedIn;
        let button;

        if(!loggedIn){
            button = <LogInButton onClick={this.displayLogInPopUp}/>
        }
        else{
            button = <LogOutButton onClick={this.handleLogOut}/>
        }
        return (
            <div className="Header">
                <nav className="Navbar">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </nav>
                <div className="Account">
                    <div className="AccountName">Guest</div>
                    <div className="LoginButton">
                        {button}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;