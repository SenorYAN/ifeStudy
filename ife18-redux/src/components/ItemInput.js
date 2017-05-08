import React, {Component} from 'react';
import {render} from 'react-dom';

export class ItemInput extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    const ndInput = this.refs.numberInput;
    if(ndInput.value == ''){
      return;
    }
    switch(e.target.id){
      case 'LEFT_IN':
          this.props.onLeftIn(ndInput.value);
          ndInput.value = '';
          break;
      case 'RIGHT_IN':
          this.props.onRightIn(ndInput.value);
          ndInput.value = '';
          break;
      case 'LEFT_OUT':
          this.props.onLeftOut();
          break;
      case 'RIGHT_OUT':
          this.props.onRightOut();
          break;
      default:
          break;
    }

  }

  render() {
    return (
      <div className="buttons" id="buttons" onClick={e => this.handleClick(e)}>
        <input type="text" id="number-input" ref="numberInput"/>
        <button id="LEFT_IN">左添加</button>
        <button id="RIGHT_IN">右添加</button>
        <button id="LEFT_OUT">左侧出</button>
        <button id="RIGHT_OUT">右侧出</button>
        <button id="BUBBLE">冒泡排序</button>
      </div>
    )
  }
} 