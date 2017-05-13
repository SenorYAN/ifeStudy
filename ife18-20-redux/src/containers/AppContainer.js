import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import ItemInput from '../components/ItemInput';
import ItemDisplay from '../components/ItemDisplay';

import {leftIn, leftOut, rightIn, rightOut, bubbleSort} from '../redux/actions/mainActions';

class AppContainer extends Component{
  componentWillReceiveProps(newProps) {
      console.log(newProps.items)
  }
  render() {
    const {dispatch, items, onLeftIn, onRightIn, onLeftOut, onRightOut, onBubbleSort} = this.props;
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
    onBubbleSort: (i, j) => dispatch(bubbleSort(i, j))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)