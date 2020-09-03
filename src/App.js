import React from 'react';

import AddElement from './containers/AddElement';
import ElementsList from './containers/ElementsList'

const App = () => {
  return (
    <div className="App">
      <AddElement></AddElement>
      <ElementsList></ElementsList>
    </div>
  );
}

export default App;
