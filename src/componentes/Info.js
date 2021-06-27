import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../store-with-reducers';

const Info = ({name, count}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Contador :{count}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
    count: state.counterReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);