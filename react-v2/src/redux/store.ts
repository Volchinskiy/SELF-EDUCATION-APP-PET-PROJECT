import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import { uiReducer, topicReducer, questionReducer } from "./reducer";
import rootSaga from "./saga/rootSaga";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  uiReducer,
  topicReducer,
  questionReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
