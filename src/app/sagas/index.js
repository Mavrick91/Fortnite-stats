import { all } from 'redux-saga/effects'
import { saga as ProfileSaga } from 'app/services/profile/saga'
import { saga as MatchesSaga } from 'app/services/matches/saga'
import { saga as ProgressSaga } from 'app/services/progress/saga'

export function* mySaga() {
  yield all([ProfileSaga(), MatchesSaga(), ProgressSaga()])
}

export default mySaga
