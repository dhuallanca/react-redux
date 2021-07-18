import { INCREMENT, DECREMENT } from '../actions/counter.action';
const initialState = 0;

const counterReducer = (state = initialState, action) => {

  if (action.type === INCREMENT) {
    return state + 1;
  }
  if (action.type === DECREMENT) {
    return state - 1;
  }
  return state;
}

export default counterReducer;