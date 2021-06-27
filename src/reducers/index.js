import { combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import userReducer from './user.reducer';

const reducers = combineReducers({
  counterReducer,
  userReducer
});

export default reducers;