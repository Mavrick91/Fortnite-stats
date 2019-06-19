import { call, put, takeLatest } from 'redux-saga/effects'
import loaderAction from 'app/services/loader/action'
import { getPlayerMatchesHistory } from 'app/api/endpoints'
import {
  FETCH_MATCH_HISTORY_REQUEST,
  FETCH_MATCH_HISTORY_SUCCEEDED,
  FETCH_MATCH_HISTORY_FAILED
} from './reducer'

function* fetchMatchesHistory(action) {
  const { requestName, accountId } = action
  const { data } = yield call(getPlayerMatchesHistory, accountId)
  console.log('data -----> ', data)

  yield put(loaderAction.loading(requestName))
  if (!data.error) {
    yield put({ type: FETCH_MATCH_HISTORY_SUCCEEDED, data })
    yield put(loaderAction.loaded(requestName))
  } else {
    yield put({ type: FETCH_MATCH_HISTORY_FAILED, data })
    yield put(loaderAction.error(requestName))
  }
}

export function* saga() {
  yield takeLatest(FETCH_MATCH_HISTORY_REQUEST, fetchMatchesHistory)
}
