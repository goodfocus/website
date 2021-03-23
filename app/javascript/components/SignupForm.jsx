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
            this.handleInputChange,
            this.handleSubmit
        )
    }

    handleInputChange(event) {
        const inputEle = event.target;
        this.setState({[inputEle.name]: inputEle.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const email = this.state.email;

        // TODO: separate into .env files and use env contextual url
        $.ajax(`/api/v1/product_release_signups/create`, {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({email}),
            success: (response) => {
                console.log(response);
            },
            error: (error) => {
                console.log(error)
            }
        })
    }

    render() {
        return (
            <form className="form-floating" method="POST" onSubmit={this.handleSubmit}>
                <input
                    id="email"
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required/>
                <label htmlFor="email">Email address</label>
                <button className="btn" type="submit">Sign up</button>
            </form>
        );
    }
}