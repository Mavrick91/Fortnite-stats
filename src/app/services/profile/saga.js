import { call, put, takeLatest } from 'redux-saga/effects'
import loaderAction from 'app/services/loader/action'
import { getPlayerStat } from 'app/api/endpoints'
import {
  GET_INFO_PLAYER_FAILED,
  GET_INFO_PLAYER_REQUEST,
  GET_INFO_PLAYER_SUCCEEDED
} from './reducer'

function* fetchUserIdPlayer(action) {
  const { username, platform } = action.payload
  const { requestName } = action
  const { data } = yield call(getPlayerStat, username, platform)

  yield put(loaderAction.loading(requestName))
  if (!data.error) {
    yield put({ type: GET_INFO_PLAYER_SUCCEEDED, data })
    yield put(loaderAction.loaded(requestName))
  } else {
    yield put({ type: GET_INFO_PLAYER_FAILED, data })
    yield put(loaderAction.error(requestName))
  }
}

export function* saga() {
  yield takeLatest(GET_INFO_PLAYER_REQUEST, fetchUserIdPlayer)
}
