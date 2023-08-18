const { USER_SUCCESS, USER_FAIL, PURGE_USER } = require("./actionTypes");

const initialState = {
  userData: {
    is_student: false,
    is_carer: false,
    is_register: false,
    point: 0,
    id: "",
    name: "",
    adminName: "",
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
