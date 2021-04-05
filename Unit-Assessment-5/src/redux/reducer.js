const initialState = {
  username: "",
  profile_pic: "",
};

const UPDATE_USER = "UPDATE_USER";
const LOGOUT = "LOGOUT";

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      return {
        ...state,
        username: payload.username,
        profile_pic: payload.profile_pic,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
