

import React, { Component } from 'react';
import './CreateAccountPopUp.css';

export default class CreateAccountPopUp extends Component {
    constructor(props){
        super(props);

        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.onSubmitWrapper = this.onSubmitWrapper.bind(this);

        this.state = {
            email: "",
            password: "",
            name: ""
        }
    }

    emailChange(e){
        this.setState({email: e.target.value});
    }

    passwordChange(e){
        this.setState({password: e.target.value});
    }

    nameChange(e){
        this.setState({name: e.target.value});
    }

    onSubmitWrapper(e){
        e.preventDefault();
        this.props.onSubmit(e, this.state.email, this.state.password, this.state.name);
    }

    render() {
        if(!this.props.displayCreateAccount){
            return null;
        }     
        return (
            <div className="PopUpContainer">   
                <div className="PopUp">
                    <h4>Create Account</h4>
                    {this.props.logInError != null &&
                        <p className="CreateAccountError">{this.props.createAccountError}</p>
                    }
                    <form onSubmit={this.onSubmitWrapper}>
                        <label htmlFor="Email">Email* </label><input name="Email" value={this.state.email} onChange={this.emailChange}></input>
                        <label htmlFor="Password">Password* </label><input name="Password" type="password" value={this.state.password} onChange={this.passwordChange}></input>
                        <label htmlFor="Name">Name </label><input name="Name" value={this.state.name} onChange={this.nameChange}></input>
                        Name is used by the chatbot to customize your experience. 
                        If you don't want the chatbot to call you anything at all, leave the name field blank
                        <input type="submit" value="Create Account"/>
                    </form>
                </div>
            </div>
        );
    }
}