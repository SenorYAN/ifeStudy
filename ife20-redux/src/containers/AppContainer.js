import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import ItemInput from '../components/ItemInput';
import ItemSearch from '../components/ItemSearch';
import ItemDisplay from '../components/ItemDisplay';

import {leftIn, leftOut, rightIn, rightOut, clickOut, toogleClass, search} from '../redux/actions/mainActions';

class AppContainer extends Component{
  render() {
    const {dispatch, items, onLeftIn, onRightIn, onLeftOut, onRightOut, onClickOut, onToogleClass, onSearch} = this.props;
    return (
      <div>
          <ItemInput 
              sum = {items.length}
              onLeftIn = {onLeftIn}
              onRightIn = {onRightIn}
              onLeftOut = {onLeftOut}
              onRightOut = {onRightOut}
              onToogleClass = {onToogleClass}
          />
          <ItemSearch 
              onSearch = {onSearch}
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
    onToogleClass: index => dispatch(toogleClass(index)),
    onSearch: keyword => dispatch(search(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)