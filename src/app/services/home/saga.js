import { call, put, takeLatest } from 'redux-saga/effects'
import { startSubmit, stopSubmit } from 'redux-form'
import { getPlayerStat } from 'app/api/endpoints'
import {
  GET_INFO_PLAYER_FAILED,
  GET_INFO_PLAYER_REQUEST,
  GET_INFO_PLAYER_SUCCEEDED
} from './reducer'

function* fetchUserIdPlayer({ payload }) {
  const { formId, username, platform } = payload

  yield put(startSubmit(formId))

  try {
    const { data } = yield call(getPlayerStat, username, platform)
    yield put({ type: GET_INFO_PLAYER_SUCCEEDED, data })
  } catch (e) {
    yield put({ type: GET_INFO_PLAYER_FAILED })
  }
  yield put(stopSubmit(formId))
}

export function* saga() {
  yield takeLatest(GET_INFO_PLAYER_REQUEST, fetchUserIdPlayer)
}
