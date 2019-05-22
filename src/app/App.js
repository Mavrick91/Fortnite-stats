import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Router } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store, { history } from 'app/redux'
import GlobalStyle from './styles'
import Profile from 'app/screens/Profile'

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={{}}>
          <React.Fragment>
            <GlobalStyle />
            <Router history={history}>
              <Switch>
                <Route
                  exact
                  path={['/', '/profile/:platform/:username']}
                  component={Profile}
                />
              </Switch>
            </Router>
          </React.Fragment>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
