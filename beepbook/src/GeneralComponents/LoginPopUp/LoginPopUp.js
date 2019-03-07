import React, { Component } from 'react';
import './LogInPopUp.css';

export default class LogInPopUp extends Component {
    constructor(props){
        super(props);

        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.onSubmitWrapper = this.onSubmitWrapper.bind(this);

        this.state = {
            email: "",
            password: ""
        }
    }

    emailChange(e){
        this.setState({email: e.target.value});
    }

    passwordChange(e){
        this.setState({password: e.target.value});
    }

    onSubmitWrapper(e){
        e.preventDefault();
        this.props.onSubmit(e, this.state.email, this.state.password);
    }

    render() {
        if(!this.props.displayLogIn){
            return null;
        }     
        return (
            <div className="PopUpContainer">
                <div className="PopUp">
                    <h4>Login</h4>
                    {this.props.logInError != null &&
                        <p className="LogInError">{this.props.logInError}</p>
                    }
                    <form onSubmit={this.onSubmitWrapper}>
                        <label htmlFor="Email">Email </label><input name="Email" value={this.state.email} onChange={this.emailChange}></input>
                        <label htmlFor="Password">Password </label><input name="Password" type="password" value={this.state.password} onChange={this.passwordChange}></input>
                        <input type="submit" value="Log In"/>
                    </form>

                    <button onClick={this.props.displayCreateAccountPopUp}>Don't have an account?</button>
                </div>
            </div>
        );
    }
}