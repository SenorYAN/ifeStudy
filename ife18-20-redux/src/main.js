import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AppContainer from './containers/AppContainer';

import inAndOut from './redux/reducers/mainReducer';

import './styles/style.scss'

let store = createStore(inAndOut, {items: ['23', '12', 56, 7]});

document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';

render((
    <Provider store = {store}>
        <AppContainer />
    </Provider>
)
, document.getElementById('root'));