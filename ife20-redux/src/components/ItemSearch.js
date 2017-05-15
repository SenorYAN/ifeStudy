import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

class ItemSearch extends Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    const ndInput = this.refs.searchInput;
    this.props.onSearch(ndInput.value);
  }
  render() {
    return (
      <div className="item-search" id="item-search">
        <input type='text' ref="searchInput"/>
        <span onClick={()=> {this.handleClick()}}>搜索</span>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
    return {
      items: state.items
    }
}
export default connect(mapStateToProps)(ItemSearch);