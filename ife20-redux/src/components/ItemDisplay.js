import React, {Component} from 'react';
import {render} from 'react-dom';

const  ItemDisplay = (props) => {
  const {items, ...other} = props;
  return (
      <ul className="display-board" id="display-board">
        {
            props.items.map((item, i) => {
                return  (
                  <ItemLi key={item.time}  item={item} index={i} {...other}/>
                )
            })
        }
      </ul>
  )
}

class ItemLi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className : `item ${props.item.ready?'fadeOutLeft':'fadeInRight'} ${props.item.finished?'finished':''}`
    };
  }
  componentWillReceiveProps(nPs) {
    this.setState({
        className : `item ${nPs.item.ready?'fadeOutLeft':'fadeInRight'} ${nPs.item.finished?'finished':''}`
    })
  }
  render() {
    const props = this.props;
    return (
        <li className={this.state.className} onClick={() => {props.onClickOut(props.index)}}><span>{props.item.value}</span></li>
    )
  }
}
  

export default ItemDisplay;