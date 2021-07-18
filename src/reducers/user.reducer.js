import {UPDATE_NAME} from '../actions/user.action'
const initialState = {
  name: 'Dennis',
  country: 'Peru'
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload.name
      }
    default:
      return state;
  }
}

export default userReducer;