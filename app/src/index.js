import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import createStore from './_helpers/configureStore'
import { App } from './App';

const store = createStore();
const MOUNT_NODE = document.getElementById("root");

render(
    <Provider store={store}>
        <App />
    </Provider>,
    MOUNT_NODE
)