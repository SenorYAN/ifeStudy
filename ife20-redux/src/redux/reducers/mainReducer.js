import { combineReducers } from 'redux'
import { LEFT_IN, RIGHT_IN, LEFT_OUT, RIGHT_OUT, CLICK_OUT, TOOGLE_CLASS} from '../actions/mainActions'


const clickOut = (state, index) => {
    const queue = state.slice();
    queue[index].finished = !(queue[index].finished);
    return queue;
}

const toogleClass = (state, index) => {
    const queue = state.slice();
    queue[index].ready = !(queue[index].ready);
    return queue;
}

const items = (state = [], action) =>{
  const {value, finished} = action;
  const time = new Date().getTime();
    switch(action.type){
      case LEFT_IN:
        return [{
          value,
          finished,
          time
        }, ...state];
      case RIGHT_IN:
        return [...state, {
          value,
          finished,
          time
        }];
      case LEFT_OUT:
        let leftOutState = state.slice();
        leftOutState.shift();
        return leftOutState;
      case RIGHT_OUT:
        let RightOutState = state.slice();
        RightOutState.pop();
        return RightOutState;
      case CLICK_OUT:
        return clickOut(state, action.index);
      case TOOGLE_CLASS:
        return toogleClass(state, action.index);
      default:
        return state;
    }
 }

const inAndout = combineReducers({
  items
})

 export default inAndout;