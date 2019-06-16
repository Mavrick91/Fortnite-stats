import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import playerInfo from 'app/services/profile/reducer'
import matchesHistory from 'app/services/matches/reducer'
import loaderInfo from 'app/services/loader/reducer'

export default history =>
  combineReducers({
    player: playerInfo,
    matchesHistory,
    form: formReducer,
    loader: loaderInfo,
    router: connectRouter(history)
  })
