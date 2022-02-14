import { takeEvery, put, all, take, call } from "redux-saga/effects";
import { apiActions, API_ACTIONS } from "../api/api.actions";
import { apiHelper } from "../../helpers/api.helper";
import { ActionTypeApi, ActionTypeReducerPath } from "../models/action.type";
import { getEmployeeRepo } from "../../api/endpoints/endpoints";
import { EmployeeType } from "../../enteties/entetiesEmloyees";
import { LOCATION_CHANGE } from "redux-first-history";

export function* onApiLoad<T>(action: ActionTypeApi<T>) {
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

export function* onApiEmploee() {
  while (true) {
    const actionPath: ActionTypeReducerPath = yield take(LOCATION_CHANGE);
    const employeeId: string =
      actionPath.payload.location.pathname.split("/")[1];

    try {
      if (employeeId) {
        const employee: EmployeeType = yield getEmployeeRepo(employeeId);
        yield put(apiActions.fetchEmployee(employee));
      }
    } catch (e) {
      yield put(apiActions.fetchFailure("employee", e));
    }
  }
}

export function* watchApiLoad() {
  yield takeEvery(
    (action: ActionTypeApi) => action.type.startsWith(API_ACTIONS.FETCH_START),
    onApiLoad
  );
}

export function* watchApiEmployee() {
  yield call(onApiEmploee);
}

export default function* rootSaga() {
  yield all([watchApiLoad(), watchApiEmployee()]);
}
