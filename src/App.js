import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, Main, AppContainer } from './style/App'

import AddElement from './containers/AddElement';
import ElementsList from './containers/ElementsList'
import NotFound from './containers/NotFound';

import { load } from './localStorage';

import { addElement } from './actions/planner.actions'

const App = ({ loadElement }) => {

  function loadDateFromLocalStorage() {
    const loadedState = load();

    if (loadedState !== undefined) {
      loadedState.forEach(element => {
        // load only elements added faster than 24h ago
        const actualTime = new Date().getTime();
        console.log(element);
        if (element.expiredDate + (3600 * 1000 * 24) >= actualTime) {
          loadElement(element.expiredDate, element.text, element.createdDate)
        }
      })
    }
  }
  loadDateFromLocalStorage();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Main>
            <Switch>
              <Route exact path="/">
                <AddElement />
                <ElementsList />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Main>
        </AppContainer>
      </ThemeProvider>
    </Router>
  )
}

const mapDispatchToProps = (dispatch) => {

  return {
    loadElement: (expiredDate, text, createdDate) => dispatch(addElement(expiredDate, text, createdDate))
  }
};

export default connect(null, mapDispatchToProps)(App);
