import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

import { userActions } from '../_actions'

function LoginPage(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        props.logout();
    }, []);

    function _handleSubmit(e) {
        e.preventDefault();

        if (username && password) {
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
            {
                props.loggingIn && <p>Loading</p>
            }
            {
                props.loggingError && props.loggingError
            }
        </React.Fragment>
    )
}

// STORE
const mapStateToProps = state => {
    const { loggingIn, user, loggingError } = state.authentication
    return {
        loggingError,
        loggingIn,
        user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(userActions.login(username, password)),
        logout: () => dispatch(userActions.logout()),
    };
};

const LoginPageConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)

export { LoginPageConnected as LoginPage }
