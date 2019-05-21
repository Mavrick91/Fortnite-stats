import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from 'app/redux';
import Home from 'app/screens/Home';
import GlobalStyle from './styles';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{}}>
        <React.Fragment>
          <GlobalStyle />
          <Router>
            <Route path="/" component={Home} />
          </Router>
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
