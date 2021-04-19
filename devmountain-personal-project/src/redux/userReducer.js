// import axios from 'axios';

const initialState = {
  user: {}
}

const UPDATE_USER = 'UPDATE_USER'

// Action Builder
export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export default function reducer(state = initialState, action) {
  // console.log(action)
  switch (action.type) {
    case UPDATE_USER: 
      return {
        ...state,
        user: action.payload
      }
    default: 
      return state;
  }
}