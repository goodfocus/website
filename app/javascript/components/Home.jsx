import React from "react";
import { Link } from "react-router-dom";
import {SignupForm1} from "./SignupForm1";

export default () => (
    <div id="content">
        <h1>Sign up for exclusive benefits!</h1>
        <p>Sign up today for the first release and receive <strong>three months free of GoodFocus Pro</strong> and
            the chance to win a <strong>$25 Amazon Gift Card!</strong></p>
        <SignupForm1 />
        <h2>What is GoodFocus?</h2>
        <p>We provide a Pomodoro browser extension that allows users to
            accrue <strong>FocusPoints&trade;</strong> that can be spent on
            various non-profit organizations. *</p>
        <small><em>* <strong>FocusPoints&trade;</strong> can be converted into services, discounts, and/or cash
            donations depending on the organization.</em></small>
    </div>
);