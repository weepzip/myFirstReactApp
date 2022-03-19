const SET_USER_AUTH_DATA = "SET_USER_AUTH_DATA";
const AUTHING_PROCESS = "AUTHING_PROCESS";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isAuthing: false,
}

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA: {
      let stateCopy = {
        ...state,
        ...action.data,
        isAuth: true,
      };
      return stateCopy;
    };
    case AUTHING_PROCESS: {
      let stateCopy = {
        ...state,
        isAuthing: action.isAuthing,
      };
      return stateCopy;
    }
    default: return state;
  };
};

export const setAuthUserData = (userId, login, email) => {
  return {
    type: SET_USER_AUTH_DATA,
    data: {userId, login, email}
  }
};

export const setAuthingProcess = (isAuthing) => {
  return {
    type: AUTHING_PROCESS,
    isAuthing
  }
}

export default authReduser;