import { all } from 'redux-saga/effects';
import { saga as homeSaga } from 'app/screens/Home/reducer-saga';

export function* mySaga() {
  yield all([homeSaga()]);
}

export default mySaga;
