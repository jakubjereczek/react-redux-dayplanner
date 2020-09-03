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
        // load only elements added faster than 24h ago
        const actualTime = new Date().getTime();
        if (element.time + (3600 * 1000 * 24) >= actualTime) {
          loadElement(element.hour, element.text, element.time)
        }
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
    loadElement: (hour, text, time) => dispatch(addElement(hour, text, time))
  }
};

export default connect(null, mapDispatchToProps)(App);
