import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import playerInfo from 'app/services/home/reducer';

export default combineReducers({
  player: playerInfo,
  form: formReducer,
});
