import { createPromiseAction } from "@adobe/redux-saga-promise";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "./actionTypes";

export const loginSuccess = (isLogin) => {
  console.log("success", isLogin);
  return {
    type: LOGIN_SUCCESS,
    isLogin: isLogin,
  };
};

export const loginFail = (error) => {
  return {
    type: LOGIN_FAIL,
    error: error,
  };
};
