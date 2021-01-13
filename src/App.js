import React from 'react';
import { connect } from 'react-redux';
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider as ThemeColorProvider } from "./contexts/ThemeContext";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { load } from 'localStorage';

import { addElement } from './actions/planner.actions'

import Routes from './Routes';

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
        <ThemeColorProvider>
          <Routes />
        </ThemeColorProvider>
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
