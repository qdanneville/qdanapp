import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from '../App/'
import About from '../About/'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root