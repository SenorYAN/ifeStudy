import React, {Component} from 'react';
import {render} from 'react-dom';

const  ItemDisplay = (props) => {
  return (
      <div className="display-board" id="display-board">
        {
            props.items.map((item, i) => {
                return  (
                  <div className="item" key={i} id={i} style={{height: `${item}px`,lineHeight: `${item}px`}}><span>{item}</span></div>
                )
            })
        }
      </div>
  )
}
  

export default ItemDisplay;