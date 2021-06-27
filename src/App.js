import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './componentes/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
