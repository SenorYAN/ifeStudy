import { combineReducers } from 'redux'
import { LEFT_IN, RIGHT_IN, LEFT_OUT, RIGHT_OUT } from '../actions/mainActions'

 const items = (state = [], action) =>{
    switch(action.type){
      case LEFT_IN:
        return [action.value, ...state];
      case RIGHT_IN:
        return [...state, action.value];
      case LEFT_OUT:
        let leftOutState = state.slice();
        leftOutState.shift();
        return leftOutState;
      case RIGHT_OUT:
        let RightOutState = state.slice();
        RightOutState.shift();
        return RightOutState;
      default:
        return state;
    }
 }

const inAndout = combineReducers({
  items
})

 export default inAndout;