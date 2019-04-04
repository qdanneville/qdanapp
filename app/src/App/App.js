import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'

import { history } from '../_helpers';
import {PrivateRoute} from '../_components/PrivateRoute'
import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'

export class App extends Component {
    render() {
        return (
            <div className="app">
                <header> <h1>Header</h1></header >
                <Router history={history}>
                    <PrivateRoute exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                </Router>
                <footer><h1>Footer</h1></footer>
            </div>
        )
    }
}