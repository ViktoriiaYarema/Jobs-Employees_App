import { takeEvery, put, all } from "redux-saga/effects";

import { apiActions, API_ACTIONS } from "../reduxApi/apiActions";
import { apiHelper } from "../../helpers/api.helper";
import { ActionType } from "../models/action.type";

export function* onApiLoad<T>(action: ActionType<T>) {
  const actionType = action.type
    .replace(API_ACTIONS.FETCH_START, "")
    .toLowerCase();
  try {
    const data: Promise<T[]> = yield apiHelper(actionType);
    yield put(apiActions.fetchSuccess<T>(actionType, data));
  } catch (e) {
    yield put(apiActions.fetchFailure(actionType, e));
  }
}

export function* watchApiLoad() {
  yield takeEvery(
    (action: ActionType) => action.type.startsWith(API_ACTIONS.FETCH_START),
    onApiLoad
  );
}

export default function* apiRootSaga() {
  yield all([watchApiLoad()]);
}
