import React, { Component } from 'react';

export default class LogoutButton extends Component {
    render() {        
        return (
            <button onClick={this.props.onClick}>Log Out</button>
        );
    }
}