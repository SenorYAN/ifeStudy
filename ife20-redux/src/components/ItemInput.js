import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {LEFT_IN, RIGHT_IN, LEFT_OUT, RIGHT_OUT} from '../redux/actions/mainActions';

const mapStateToProps = (state) => {
  return {
    items : state.items
  }
}

@connect(mapStateToProps)
export default class ItemInput extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    const ndInput = this.refs.numberInput;
    if(ndInput.value == '' && (e.target.id == LEFT_IN || e.target.id == RIGHT_IN)){
      return;
    }
    const {onLeftIn, onLeftOut, onRightIn, onRightOut, onToogleClass, sum} = this.props;
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
          if(sum>0){
            onToogleClass(0);
            setTimeout(() => {
              onLeftOut();
            },500);
          }
          break;
      case RIGHT_OUT:
          if(sum>0){
            onToogleClass(sum-1);
            setTimeout(() => {
              onRightOut();
            },500);
          }
          break;
      default:
          break;
    }

  }

  render() {
    return (
      <div className="buttons" id="buttons" onClick={e => this.handleClick(e)}>
        <textarea id="number-input" ref="numberInput"/>
        <span id="LEFT_IN">上添加</span>
        <span id="RIGHT_IN">下添加</span>
        <span id="LEFT_OUT">上侧出</span>
        <span id="RIGHT_OUT">下侧出</span>
      </div>
    )
  }
};