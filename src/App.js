import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import storeMultipleReducers from './store-combine-reducers';
import storeRefactor from './store-refactor';
import Counter from './componentes/Counter';
import CounterMultiple from './componentes/Counter-with-reducers';
import Info from './componentes/Info';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Counter></Counter>
        </div>
      </Provider>
      <Provider store={storeMultipleReducers}>

        <div className="App">
          <CounterMultiple></CounterMultiple>
        </div>
      </Provider>
      <Provider store={storeRefactor}>
        <div className="App">
          <h3>Usando store refactor</h3>
          <CounterMultiple></CounterMultiple>
        </div>
        <div>
          <Info></Info>
        </div>
      </Provider>
    </>
  );
}

export default App;
