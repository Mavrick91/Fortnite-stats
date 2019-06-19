import { call, put, takeLatest } from 'redux-saga/effects'
import loaderAction from 'app/services/loader/action'
import { getPlayerHistory } from 'app/api/endpoints'

import {
  FETCH_HISTORICAL_REQUEST,
  FETCH_HISTORICAL_SUCCEEDED,
  FETCH_HISTORICAL_FAILED
} from './reducer'

function* fetchPlayerHistory(action) {
  const { accountId, mode, requestName } = action
  const { data } = yield call(getPlayerHistory, accountId, mode)
  console.log('data -----> ', data)

  yield put(loaderAction.loading(requestName))
  if (!data.error) {
    yield put({ type: FETCH_HISTORICAL_SUCCEEDED, data })
    yield put(loaderAction.loaded(requestName))
  } else {
    yield put({ type: FETCH_HISTORICAL_FAILED, data })
    yield put(loaderAction.error(requestName))
  }
}

export function* saga() {
  yield takeLatest(FETCH_HISTORICAL_REQUEST, fetchPlayerHistory)
}
