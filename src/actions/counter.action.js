export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

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