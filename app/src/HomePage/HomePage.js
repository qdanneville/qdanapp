import React from "react";
import { connect } from 'react-redux'

function Home(props) {
    return (
        <React.Fragment>
            <h1>{props.state.label || 'App name'} </h1>
            <h1>Home Page</h1>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        state
    };
};

const connectedHomePage = connect(
    mapStateToProps,
)(Home)

export { connectedHomePage as HomePage };
