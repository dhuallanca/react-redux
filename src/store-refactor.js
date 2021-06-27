import rootReducers from './reducers';
import { createStore } from 'redux';
import { INCREMENT, DECREMENT } from './reducers/counter.reducer';


//action creators
export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}
const storeRefactor = createStore(rootReducers);

export default storeRefactor;
