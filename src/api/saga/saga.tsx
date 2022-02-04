import { takeEvery, put, all } from "redux-saga/effects";
import { apiActions, API_ACTIONS, ActionType } from "../reduxApi/apiActions";
import { apiHelper } from "../../helpers/api.helper";
import { JobType } from "../../enteties/entetiesJobs";
import { EmployeeType } from "../../enteties/entetiesEmloyes";

export function* onApiLoad({ type }: ActionType) {
  const actionType = type.replace(API_ACTIONS.FETCH_START, "").toLowerCase();
  try {
    const data: (JobType | EmployeeType)[] = yield apiHelper(actionType);
    yield put(apiActions.fetchSuccess(actionType, data));
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
