import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav className="navbar">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;