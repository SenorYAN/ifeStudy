import React, {Component} from 'react';
import {render} from 'react-dom';
import {ItemInput} from '../components/ItemInput';
import {ItemDisplay} from '../components/ItemDisplay';

export default class AppContainer extends Component{
  render() {
    return (
      <div>
          <ItemInput />
          <ItemDisplay />
      </div>
    )  
  }
}