import React from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {userActions} from '../_actions'

function Home(props) {
    return (
        <React.Fragment>
            <h1>{props.state.label || 'App name'} </h1>
            <h1>Home Page</h1>
            <Link to='/login'>logout</Link>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(userActions.logout()),
    };
};

const connectedHomePage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)

export { connectedHomePage as HomePage };
