import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import ItemInput from '../components/ItemInput';
import ItemDisplay from '../components/ItemDisplay';

import {leftIn, leftOut, rightIn, rightOut, clickOut, bubbleSort} from '../redux/actions/mainActions';

class AppContainer extends Component{
  render() {
    const {dispatch, items, onLeftIn, onRightIn, onLeftOut, onRightOut, onClickOut, onBubbleSort} = this.props;
    return (
      <div>
          <ItemInput 
              onLeftIn = {onLeftIn}
              onRightIn = {onRightIn}
              onLeftOut = {onLeftOut}
              onRightOut = {onRightOut}
              onBubbleSort = {onBubbleSort}
          />
          <ItemDisplay
              items = {items}
              onClickOut = {onClickOut}
          />
      </div>
    )  
  }
}

const mapStateToProps = state => {
  return {
    items : state.items
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onLeftIn: value => dispatch(leftIn(value)),
    onRightIn: value => dispatch(rightIn(value)),
    onLeftOut: () => dispatch(leftOut()),
    onRightOut: () => dispatch(rightOut()),
    onClickOut: index => dispatch(clickOut(index)),
    onBubbleSort: (i, j) => dispatch(bubbleSort(i, j))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)