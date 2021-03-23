import React from "react";
import {bindMethodsToComponent} from "../helper";
import {SignupForm} from "./SignupForm";
import SignupSuccess from "./SignupSuccess";

class SignupPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            registeredEmail: ''
        }

        bindMethodsToComponent(this, this.handleRegisteredEmail);
    }

    handleRegisteredEmail(registeredEmail) {
        this.setState({registeredEmail});
    }

    render() {
        return <div id="content">
            {this.state.registeredEmail.length === 0 ?
                <div>
                    <h1>Sign up for exclusive benefits!</h1>
                    <p>Sign up today for the first release and receive <strong>three months free of GoodFocus
                        Pro</strong> and
                        the chance to win a <strong>$25 Amazon Gift Card!</strong>
                    </p>
                    <SignupForm onSuccess={this.handleRegisteredEmail} />
                </div> :
                <SignupSuccess email={this.state.registeredEmail} />}
            <h2>What is GoodFocus?</h2>
            <p>We provide a Pomodoro browser extension that allows users to
                accrue <strong>FocusPoints&trade;</strong> that can be spent on
                various non-profit organizations. *</p>
            <small><em>* <strong>FocusPoints&trade;</strong> can be converted into services, discounts, and/or cash
                donations depending on the organization.</em></small>
        </div>
    }
}

export default SignupPage;