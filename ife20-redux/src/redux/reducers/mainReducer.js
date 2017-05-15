import { combineReducers } from 'redux'
import { LEFT_IN, RIGHT_IN, LEFT_OUT, RIGHT_OUT, CLICK_OUT, TOOGLE_CLASS, SEARCH} from '../actions/mainActions'


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

const search = (state, keyword) => {
    const reg = new RegExp(`(${keyword})`, 'g');
    return state.map((item, index) => {
      const {value, ...other} = item;
      return {
        value : item.value.replace(/≈/g,'').replace(/ø/g,'').replace(reg, `≈$1ø`),
        ...other
      }
    })
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
      case SEARCH:
        return search(state, action.keyword);
      default:
        return state;
    }
 }

const inAndout = combineReducers({
  items
})

 export default inAndout;