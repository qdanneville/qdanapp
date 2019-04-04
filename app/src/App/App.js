import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'
import {PrivateRoute} from '../_components/PrivateRoute'

export class App extends Component {
    render() {
        return (
            <div className="app">
                <header> <h1>Header</h1></header >
                <Router>
                    <PrivateRoute exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                </Router>
                <footer><h1>Footer</h1></footer>
            </div>
        )
    }
}