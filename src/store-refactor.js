import rootReducers from './reducers';
import { createStore } from 'redux';

const storeRefactor = createStore(rootReducers);

export default storeRefactor;
