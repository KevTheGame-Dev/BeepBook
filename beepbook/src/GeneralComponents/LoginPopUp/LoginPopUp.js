import React, { Component } from 'react';
import './LoginPopUp.css';

export default class LoginPopUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    render() {        
        return (
            <div className="LoginPopUp">
                <h4>Login</h4>
                <form onSubmit={this.submitLogin}>
                    <label for="Email">Email: </label><input name="Email"></input>
                    <label for="Password">Password: </label><input name="Password" type="password"></input>
                </form>
            </div>
        );
    }
}