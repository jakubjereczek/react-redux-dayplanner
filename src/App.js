import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddElement from './containers/AddElement';
import ElementsList from './containers/ElementsList'

import { load } from './localStorage';

import { addElement } from './actions/planner.actions'

const App = ({ loadElement }) => {

  function loadDateFromLocalStorage() {
    const loadedState = load();
    console.log("CO TO", loadedState);

    if (loadedState !== undefined) {
      loadedState.forEach(element => {
        loadElement(element.hour, element.text)
      })
    }
  }
  loadDateFromLocalStorage();

  return (
    <div className="App" >
      <AddElement></AddElement>
      <ElementsList></ElementsList>
    </div>
  )


}

const mapDispatchToProps = (dispatch) => {

  return {
    loadElement: (hour, text) => dispatch(addElement(hour, text))
  }
};

export default connect(null, mapDispatchToProps)(App);
