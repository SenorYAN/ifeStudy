import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import AppContainer from './containers/AppContainer';

import inAndOut from './redux/reducers/mainReducer';

import './styles/style.scss'

let store = createStore(
    inAndOut, 
    {items: [{value : 'todo1', finished : false, time : new Date().getTime(), ready : false}]},
    applyMiddleware(logger));

document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';

render((
    <Provider store = {store}>
        <AppContainer />
    </Provider>
)
, document.getElementById('root'));