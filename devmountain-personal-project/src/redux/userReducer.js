// import axios from 'axios';

const initialState = {
  user: null
}

const UPDATE_USER = 'UPDATE_USER'

// Action Builder
export const updateUser = (user) => {
  console.log(user)
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
        user: action.payload
      }
    default: 
      return state;
  }
}