import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {LEFT_IN, RIGHT_IN, LEFT_OUT, RIGHT_OUT, BUBBLE_SORT} from '../redux/actions/mainActions';

class ItemInput extends Component {
  constructor(props) {
    super(props);
  }
  bubbleSort() {
      const { onBubbleSort , items} = this.props;
      const res = [];
      let queue = items.slice();
      for(let i = 0; i < queue.length; i++){
        let flag = true;
        for(let j = 0; j < queue.length - i; j++){
          if(queue[j] > queue[j+1]){
            flag = false;
            [queue[j+1], queue[j]] = [queue[j], queue[j+1]]
            res.push([j, j+1])
          }
        }
        if(flag){
          break;
        }
      }

      res.forEach((set, i) => {
        ((i) => {
          setTimeout(() => {
            onBubbleSort(set[0], set[1]);
          }, i*1000)
        })(i)
      })
  }

  handleClick(e) {
    const ndInput = this.refs.numberInput;
    if(ndInput.value == '' && e.target.id != BUBBLE_SORT){
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
      case BUBBLE_SORT:
          this.bubbleSort();
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
        <button id="BUBBLE_SORT">冒泡排序</button>
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