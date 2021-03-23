import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupPage from "../components/SignupPage";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={SignupPage} />
        </Switch>
    </Router>
);