import React from "react"
import PropTypes from "prop-types"

class SignupSuccess extends React.Component {
    render() {
        return (
            <div>
                <h1>You have successfully signed up for the first release!</h1>
                <div>Stay tuned at <strong>{this.props.email}</strong> for release news and exclusive benefits!</div>
            </div>
        );
    }
}

SignupSuccess.propTypes = {
    email: PropTypes.string
};
export default SignupSuccess
