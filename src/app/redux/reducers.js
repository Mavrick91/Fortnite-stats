import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as playerInfo } from 'app/screens/Home/reducer-saga';

export default combineReducers({
  player: playerInfo,
  form: formReducer,
});
