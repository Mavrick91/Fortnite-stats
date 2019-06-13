import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'
import rootSaga from 'app/sagas'
import createSagaMiddleware from 'redux-saga'

export const history = createBrowserHistory({
  basename: ''
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer(history),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    )
  )
)

sagaMiddleware.run(rootSaga)

export default store
