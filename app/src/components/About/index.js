import React, { Component } from "react";
import { connect } from 'react-redux'
import { actions } from '../../actions/';

class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading:false,
        }
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <h1>About</h1>
        )
    }

}

const mapStateToProps = state => {
    return {
        init: state.initialization
    };
};

const mapDispatchToProps = dispatch => {
    return {
        init: () => dispatch(actions.init()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)
