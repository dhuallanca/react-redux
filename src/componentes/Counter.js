import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../store';

const Counter = (props) => {
  const onIncrement = () => {
    //usando action creator
    props.dispatch(increment());
  }
  const onDecrement = () => {
    // usando action
    props.dispatch({
      type: 'DECREMENT'
    });
  }
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <h1>{props.count}</h1>
    </div>
  )
}

//mapstate nos sirve para conectarnos al store del Provider
// en este ejemplo count es enviado a Counter como una prop
const mapStateToProps = (estado) => {
  return {
    count: estado
  };
}

export default connect(mapStateToProps)(Counter);