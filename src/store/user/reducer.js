const { USER_SUCCESS, USER_FAIL, PURGE_USER } = require("./actionTypes");

const initialState = {
  userData: {
    id: "",
    name: "",
    img: "",
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_SUCCESS:
      return {
        ...state,
        userData: action.userData,
      };
    // case  CALIBRATION_FAIL:
    //     console.error("[Calibration Fail] ", action.payload);
    //     return state;
    default:
      break;
  }
  return state;
};

export default user;
