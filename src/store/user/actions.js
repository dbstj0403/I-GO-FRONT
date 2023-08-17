// import { createPromiseAction } from "@adobe/redux-saga-promise";
import { USER_FAIL, USER_SUCCESS, PURGE_USER } from "./actionTypes";

export const userSuccess = (userData) => {
  console.log("success", userData);
  return {
    type: USER_SUCCESS,
    userData: userData,
  };
};

export const userFail = (error) => {
  return {
    type: USER_FAIL,
    error: error,
  };
};
