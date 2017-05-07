import React, {Component} from 'react';
import {render} from 'react-dom';

export class ItemInput extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="buttons" id="buttons">
        <input type="text" id="number-input" />
        <button id="LEFT-IN">左添加</button>
        <button id="RIGHT-IN">右添加</button>
        <button id="LEFT-OUT">左侧出</button>
        <button id="RIGHT-OUT">右侧出</button>
        <button id="BUBBLE">冒泡排序</button>
      </div>
    )
  }
} 