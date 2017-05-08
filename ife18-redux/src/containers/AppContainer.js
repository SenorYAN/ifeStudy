import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {ItemInput} from '../components/ItemInput';
import {ItemDisplay} from '../components/ItemDisplay';

import {leftIn, leftOut, rightIn, rightOut} from '../redux/actions/mainActions';

class AppContainer extends Component{
  componentWillReceiveProps(newProps) {
      console.log(newProps.items)
  }
  render() {
    const {dispatch, items} = this.props;
    return (
      <div>
          <ItemInput 
              onLeftIn = {value => dispatch(leftIn(value))}
              onRightIn = {value => dispatch(rightIn(value))}
              onLeftOut = {value => dispatch(leftOut())}
              onRightOut = {value => dispatch(rightOut())}
          />
          <ItemDisplay />
      </div>
    )  
  }
}

const selectItems = (state) => {
  return {
    items : state.items
  }
}

export default connect(selectItems)(AppContainer)