import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { Provider } from 'react-redux';
import appStore from './stores/app';

const title = "Welcome to my React, webpack and Redux clean slate";

ReactDOM.render(
    <Provider store={appStore}><App /></Provider>,
    document.getElementById('app')
);

module.hot.accept();