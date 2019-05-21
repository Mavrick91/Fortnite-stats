import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import LogRocket from 'logrocket';
import mySaga from 'app/sagas';
import createSagaMiddleware from 'redux-saga';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware, LogRocket.reduxMiddleware())),
);

sagaMiddleware.run(mySaga);

export default store;
