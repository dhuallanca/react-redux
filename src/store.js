import { createStore } from 'redux';

// Store
// Es el almacenamiento de nuestro estado
// store.dispatch(action) ejecuta la acción

// Reducer
// Es una funcion pura que nos retorna el estado actual
// tiene dos parametros el estado actual y una accion

//Action
//es un objeto plano con dos parametros type: string y payload: object

const initialState = 0;
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = initialState, action) => {

  if (action.type === INCREMENT) {
    return state + 1;
  }
  if (action.type === DECREMENT) {
    return state - 1;
  }
  return state;
}

const store = createStore(counterReducer);

export default store;