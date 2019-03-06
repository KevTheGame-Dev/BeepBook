import React, { Component } from 'react';
import './CreateAccountPopUp.css';

export default class CreateAccountPopUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    render() {        
        return (
            <div className="CreateAccountPopUp">
                <h4>Create Account</h4>
                <form onSubmit={this.submitCreateAccount}>
                    <label for="Email">Email* </label><input name="Email"></input>
                    <label for="Password">Password* </label><input name="Password" type="password"></input>
                    <label for="Name">Name </label><input name="Name"></input>
                    Name is used by the chatbot to customize your experience. 
                    If you don't want the chatbot to call you anything at all, leave the name field blank
                </form>
            </div>
        );
    }
}