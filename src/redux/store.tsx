import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { apiReducer } from "./reduxApi/reducer";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./saga/saga";
import { appReducer } from "./app/app.reducer";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const reducers = combineReducers({
  api: apiReducer,
  router: routerReducer,
  app: appReducer,
});

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(routerMiddleware, sagaMiddleWare))
);
sagaMiddleWare.run(rootSaga);

export const history = createReduxHistory(store);
