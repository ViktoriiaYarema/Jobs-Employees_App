import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { apiReducer } from "./reduxApi/reducer";
import createSagaMiddleWare from "redux-saga";
import apiSaga from "./saga/saga";
import { appReducer } from "./app/app.reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const reducers = combineReducers({
  api: apiReducer,
  app: appReducer,
});

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(apiSaga);

export default store;
