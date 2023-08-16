// src/store/index.js

import { applyMiddleware, createStore } from "redux"; // createStore 적용 문제로 redux version 4.1.2 로 낮춰서 사용
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import rootReducer from "../reducer";
import rootSaga from "../saga";

const logger = createLogger(); // 로거 미들웨어 활성화
const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어 활성화

const store = createStore(
  // store 생성
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware)) // redux 개발자도구 활성화
);

export const sagaRun = () => {
  sagaMiddleware.run(rootSaga); // sagaMiddleware에 rootSaga 바인딩
};

export default store;
