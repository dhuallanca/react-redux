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

//action creators
// retornan el objeto que describe la accion
// sirven para no pasar los action como objeto en los dispatch
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

const store = createStore(counterReducer);

export default store;