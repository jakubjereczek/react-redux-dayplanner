import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/AuthContext";

import { theme, Main, AppContainer } from './style/App'
import GlobalStyle from './index.css';

import AddElement from './containers/AddElement';
import ElementsList from './containers/ElementsList'
import NotFound from './containers/NotFound';
import Info from './containers/Info';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ForgotPassword from './containers/ForgotPassword';
import UpdateProfile from './containers/UpdateProfile';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './components/PrivateRoute';

import { load } from './localStorage';

import { addElement } from './actions/planner.actions'

toast.configure();

const App = ({ loadElement }) => {

  function loadDateFromLocalStorage() {
    const loadedState = load();

    if (loadedState !== undefined) {
      loadedState.forEach(element => {
        loadElement(element.id, element.expiredDate, element.text, element.createdDate)
      })
    }
  }
  loadDateFromLocalStorage();

  return (
    <>
      <ToastContainer />
      <Router forceRefresh={true} basename={process.env.PUBLIC_URL}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <AppContainer>
              <GlobalStyle />
              <Main>
                <Switch>
                  {/* Prywatne routy z PrivateRoute */}
                  <PrivateRoute exact path="/">
                    <AddElement />
                    <ElementsList />
                  </PrivateRoute>
                  <PrivateRoute path="/info/:id">
                    {/* <Info props={null} /> */}
                    <Info />
                  </PrivateRoute>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/signup">
                    <Signup />
                  </Route>
                  <Route path="/forgot-password">
                    <ForgotPassword />
                  </Route>
                  <PrivateRoute path="/update-profile">
                    <UpdateProfile />
                  </PrivateRoute>
                  <Route>
                    <NotFound />
                  </Route>
                </Switch>
              </Main>
            </AppContainer>
          </ThemeProvider>
        </AuthProvider>
      </Router>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {

  return {
    loadElement: (id, expiredDate, text, createdDate) => dispatch(addElement(id, expiredDate, text, createdDate))
  }
};

export default connect(null, mapDispatchToProps)(App);
