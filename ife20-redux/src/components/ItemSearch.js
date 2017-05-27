import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return {
      items: state.items
    }
}

class Twitter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user : null
    }
  }
  async componentDidMount () {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState({user : 1});
        resolve();
      },4000)
    });
    await setTimeout(() => {
      this.setState({user : 2})
    },1000);
  }
  render () {
    return this.props.children(this.state.user)
  }
}

@connect(mapStateToProps)
export default class ItemSearch extends Component {
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
        <Twitter>{(user) => <p>{user}</p>}</Twitter>
      </div>
    )
  }
};