import { combineReducers } from 'redux'
import { LEFT_IN, RIGHT_IN, LEFT_OUT, RIGHT_OUT, BUBBLE_SORT} from '../actions/mainActions'

const bubbleSort = (state, i, j) => {
    const queue = state.slice();
    [queue[i], queue[j]] = [queue[j], queue[i]]
    return queue;        
}

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
      case BUBBLE_SORT:
        return bubbleSort(state, action.front, action.end);
      default:
        return state;
    }
 }

const inAndout = combineReducers({
  items
})

 export default inAndout;