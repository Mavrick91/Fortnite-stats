import { all } from 'redux-saga/effects'
import { saga as ProfileSaga } from 'app/services/profile/saga'

export function* mySaga() {
  yield all([ProfileSaga()])
}

export default mySaga
