import React, {Component} from 'react';
import {render} from 'react-dom';

const  ItemDisplay = (props) => {
  return (
      <ul className="display-board" id="display-board">
        {
            props.items.map((item, i) => {
                return  (
                  <li className="item" key={i} id={i} onClick={() => {props.onClickOut(i)}}><span>{item}</span></li>
                )
            })
        }
      </ul>
  )
}
  

export default ItemDisplay;