import React, { useState } from "react";
import { connect } from 'react-redux'

import { userActions } from '../_actions'

function LoginPage(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function _handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);

        if (username && password) {
            console.log('submitted form', submitted);
            console.log('username', username);
            console.log('password', password);

            props.login(username, password);
        }
    }

    return (
        <React.Fragment>
            <h1>Login Page</h1>
            <form onSubmit={_handleSubmit}>
                <div className="row">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="row">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="row">
                    <input type="submit" name="submut" value="Submit"></input>
                </div>
            </form>
        </React.Fragment>
    )
}

// STORE
const mapStateToProps = state => {
    const { loggingIn } = state.authentication
    return {
        loggingIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(userActions.login(username ,password)),
    };
};

const LoginPageConnected = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export { LoginPageConnected as LoginPage }
