import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../store-combine-reducers';
import { updateName } from '../actions/user.action';

const Info = ({ user, count, updateName }) => {

  let textInput = useRef('');
  const handleOnChange = (event) => {
    const name = event.target.value;
    updateName(name);
  }
  const handleOnClick = () => {
    updateName(textInput.current.value);
  }
  return (
    <div>
      <h1>{user.name} - {user.country}</h1>
      <h2>Contador :{count}</h2>
      <input type="text"
        ref={textInput}
        onChange={handleOnChange}></input>
      <button onClick={handleOnClick}>Update Name</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    count: state.counterReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    updateName: (name) => dispatch(updateName(name))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);