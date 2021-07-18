import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter.action';

const CounterMultiple = (props) => {
  const onIncrement = () => {
    //usando mapDispatchToProps
    props.increment();
  }
  const onDecrement = () => {
    //usando mapDispatchToProps
    props.decrement();
  }
  return (
    <div>
      <div>
        <h3>using dispatch</h3>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
      <div>
        <h3>using dispatch to props with action creator</h3>
        <button onClick={props.decrement}>-</button>
        <button onClick={props.increment}>+</button>
      </div>
      <h1>{props.count}</h1>
      <h2>{props.user.name}</h2>
    </div>
  )
}

//mapstate nos sirve para conectarnos al store del Provider
// en este ejemplo count es enviado a Counter como una prop
const mapStateToProps = (estado) => {
  return {
    count: estado.counterReducer,
    user: estado.userReducer
  };
}

// pasa los dispatch como props
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}


//connect recibe dos parametros mapStateToProps, dispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(CounterMultiple);