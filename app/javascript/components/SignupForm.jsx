import React from "react";
import PropTypes from "prop-types"
import $ from 'jquery';
import {bindMethodsToComponent} from '../helper';


const csrf = $("meta[name='csrf-token']").attr("content");
$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    jqXHR.setRequestHeader('X-CSRF-Token', csrf);
});

export class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            errorMsg: '',
            isLoading: false
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
        this.setState({isLoading: true});
        $.ajax(`/api/v1/product_release_signups/create`, {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({email}),
            success: () => {
                this.props.onSuccess(email);
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
            },
            complete: () => this.setState({isLoading: false})
        });
    }

    render() {
        return (
            <form method="POST" onSubmit={this.handleSubmit}>
                <div className="form-floating">
                    <input
                        id="email"
                        className={`form-control${this.hasError() ? ' is-invalid' : ''}`}
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
                <button className="btn" type="submit">
                    {this.state.isLoading ?
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> : 'Sign Up'}
                </button>
            </form>
        );
    }
}

SignupForm.propTypes = {
    onSuccess: PropTypes.func.isRequired
}