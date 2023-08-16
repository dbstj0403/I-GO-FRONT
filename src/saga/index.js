// src/saga/index.js

import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    // 설정한 saga
  ]);
}
