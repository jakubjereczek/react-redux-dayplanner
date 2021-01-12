import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/AuthContext";

import { theme } from 'components/Wrapper/Wrapper.css';
import Wrapper from 'components/Wrapper';

import GlobalStyle from './index.css';

import { ForgotPassword, Info, Login, Main as MainPage, NotFound, Signup, UpdateProfile } from './pages';
import Profil from 'components/Profil';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BlockPublicRoute from './components/BlockPublicRoute';
import PrivateRoute from './components/PrivateRoute';

import { load } from 'localStorage';

import { addElement } from './actions/planner.actions'

toast.configure();

const App = ({ loadElement }) => {

  load().then(elements => {
    if (elements) {
      elements.forEach(element => {
        console.log(element)
        if (element) {
          loadElement(element.id, element.expiredDate, element.text, element.createdDate)
        }
      })
    }
  })

  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <GlobalStyle />
            <Router basename={process.env.PUBLIC_URL}>
              <Profil />
              <Switch>
                {/* Prywatne routy z PrivateRoute */}
                <PrivateRoute exact path="/">
                  <MainPage />
                </PrivateRoute>
                <PrivateRoute path="/info/:id">
                  {/* <Info props={null} /> */}
                  <Info />
                </PrivateRoute>
                {/* BlockPublicRoute dla routow, ktore nie maja być wyswietlane w przypadku zalogowania (nastapi przekierowanie na "/") */}
                <BlockPublicRoute path="/login">
                  <Login />
                </BlockPublicRoute>
                <BlockPublicRoute path="/signup">
                  <Signup />
                </BlockPublicRoute>
                <BlockPublicRoute path="/forgot-password">
                  <ForgotPassword />
                </BlockPublicRoute>
                <PrivateRoute path="/update-profile">
                  <UpdateProfile />
                </PrivateRoute>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </Router>
          </Wrapper>
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {

  return {
    loadElement: (id, expiredDate, text, createdDate) => dispatch(addElement(id, expiredDate, text, createdDate))
  }
};

export default connect(null, mapDispatchToProps)(App);
