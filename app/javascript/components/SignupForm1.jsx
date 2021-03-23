import React from "react";

export class SignupForm1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        }
    }

    signUp() {

    }

    render() {
        return <form action="https://formspree.io/f/xqkgovlq" className="form-floating" method="POST">
            <input type="email" name="email" required className="form-control" id="email"
                   placeholder="name@example.com" />
            <label htmlFor="email">Email address</label>
            <button className="btn" type="submit">Sign up</button>
        </form>;
    }
}