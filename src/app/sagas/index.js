import { all } from 'redux-saga/effects'
import { saga as homeSaga } from 'app/services/profile/saga'

export function* mySaga() {
  yield all([homeSaga()])
}

export default mySaga
