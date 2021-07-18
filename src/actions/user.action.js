// Define constants for actions name
export const UPDATE_NAME = 'UPDATE_NAME';


// Action Creator

export const updateName = (name) => {
  return {
    type: UPDATE_NAME,
    payload: {
      name
    }
  }

}