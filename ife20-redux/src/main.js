import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import AppContainer from './containers/AppContainer';

import inAndOut from './redux/reducers/mainReducer';

import './styles/style.scss'

const middlewares = [];

// @开发模式logger
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

//实例化
let store = createStore(
    inAndOut, 
    {items: [{value : 'todo1', finished : false, time : new Date().getTime(), ready : false}]},
    applyMiddleware(... middlewares));

//页面字体rem
document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';

render((
    <Provider store = {store}>
        <AppContainer />
    </Provider>
)
, document.getElementById('root'));