import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

class Header extends Component {
    render() {
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
                        <a href="">Login</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;