import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {LEFT_IN, RIGHT_IN, LEFT_OUT, RIGHT_OUT} from '../redux/actions/mainActions';

class ItemInput extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    const ndInput = this.refs.numberInput;
    if(ndInput.value == '' && (e.target.id == LEFT_IN || e.target.id == RIGHT_IN)){
      return;
    }
    const {onLeftIn, onLeftOut, onRightIn, onRightOut} = this.props;
    switch(e.target.id){
      case LEFT_IN:
          onLeftIn(ndInput.value);
          ndInput.value = '';
          break;
      case RIGHT_IN:
          onRightIn(ndInput.value);
          ndInput.value = '';
          break;
      case LEFT_OUT:
          onLeftOut();
          break;
      case RIGHT_OUT:
          onRightOut();
          break;
      default:
          break;
    }

  }

  render() {
    return (
      <div className="buttons" id="buttons" onClick={e => this.handleClick(e)}>
        <textarea id="number-input" ref="numberInput"/>
        <button id="LEFT_IN">上添加</button>
        <button id="RIGHT_IN">下添加</button>
        <button id="LEFT_OUT">上侧出</button>
        <button id="RIGHT_OUT">下侧出</button>
      </div>
    )
  }
} 
const select = (state) => {
  return {
    items : state.items
  }
}
export default connect(select)(ItemInput);