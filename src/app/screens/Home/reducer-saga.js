import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { startSubmit, stopSubmit } from 'redux-form';
import { getUserId, getUserStats } from 'app/api/endpoints';

// CONSTANTS

const GET_INFO_PLAYER_REQUEST = 'GET_INFO_PLAYER_REQUEST';
const GET_INFO_PLAYER_SUCCEEDED = 'GET_INFO_PLAYER_SUCCEEDED';
const GET_INFO_PLAYER_FAILED = 'GET_INFO_PLAYER_FAILED';

// ACTION

export const getUserIdPlayer = (payload) => ({
  type: GET_INFO_PLAYER_REQUEST,
  payload,
});

// SAGA

function* fetchUserStats(payload) {
  const { userId, formId } = payload;

  try {
    const { data } = yield call(axios.get, getUserStats, {
      params: { user_id: userId },
    });

    if (data.success === false) throw new Error(data.error);
    else yield put({ type: GET_INFO_PLAYER_SUCCEEDED, data });
  } catch (e) {
    yield put({ type: GET_INFO_PLAYER_FAILED, message: e });
  }
  yield put(stopSubmit(formId));
}

function* fetchUserIdPlayer({ payload }) {
  const { formId, username } = payload;

  yield put(startSubmit(formId));

  const { data } = yield call(axios.get, getUserId, {
    params: { username },
  });

  if (data.success === false) {
    yield put(stopSubmit(formId, { username: data.error }));
  } else {
    yield put({ type: GET_INFO_PLAYER_SUCCEEDED, data });
    yield call(fetchUserStats, { userId: data.uid, formId });
  }
}

export function* saga() {
  yield takeLatest(GET_INFO_PLAYER_REQUEST, fetchUserIdPlayer);
}

// REDUCER

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_INFO_PLAYER_SUCCEEDED:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};
