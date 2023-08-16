const { LOGIN_SUCCESS, LOGIN_FAIL } = require("./actionTypes");

const initialState = {
  isLogin: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case LOGIN_FAIL:
      console.error("[Login Fail] ", action.payload);
      return state;
    default:
      break;
  }
  return state;
};

export default login;
