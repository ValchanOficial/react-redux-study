import React from 'react';
import './App.css';

import Interval from './components/Interval';
import Average from './components/Average';
import Sum from './components/Sum';
import Sort from './components/Sort';

const App = () => {

  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
      <div className="linha">
        <Interval/>
      </div>
      <div className="linha">
        <Average/>
        <Sum/>
        <Sort/>
      </div>
    </div>
  );
}

export default App;
