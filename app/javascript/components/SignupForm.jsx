import React from "react";
import $ from 'jquery';
import {bindMethodsToComponent} from '../helper';

const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    jqXHR.setRequestHeader('X-CSRF-Token', csrf);
});

export class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            errorMsg: '',
            isComplete: false
        }

        bindMethodsToComponent(this,
            this.handleEmailChange,
            this.handleSubmit,
            this.hasError
        )
    }

    hasError() {
        return this.state.errorMsg.length > 0;
    }

    handleEmailChange(event) {
        const email = event.target.value;
        this.setState({email, errorMsg: ''});
    }

    handleSubmit(event) {
        event.preventDefault();
        const email = this.state.email;

        $.ajax(`/api/v1/product_release_signups/create`, {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({email}),
            success: () => {
                this.setState({isComplete: true});
            },
            error: (err) => {
                // if expected error, display it, else display generic error message
                let errorMsg;
                try {
                    errorMsg = `Email ${err.responseJSON.email[0]}, please try again.`;
                } catch {
                    errorMsg = 'Email could not be registered, please try again later.';
                }
                this.setState({errorMsg});
            }
        })
    }

    render() {
        return (
            <form method="POST" onSubmit={this.handleSubmit}>
                <div className="form-floating">
                    <input
                        id="email"
                        className={`form-control${ this.hasError() ?' is-invalid' : ''}`}
                        type="email"
                        placeholder="name@example.com"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        required/>
                    <label htmlFor="email">Email address</label>
                    <div className="invalid-feedback">
                        {this.state.errorMsg}
                    </div>
                </div>
                <button className="btn" type="submit">Sign up</button>
            </form>
        );
    }
}