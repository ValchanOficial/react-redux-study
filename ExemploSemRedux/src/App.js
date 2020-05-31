import React, { useState } from 'react';
import './App.css';

import Interval from './components/Interval';
import Average from './components/Average';
import Sum from './components/Sum';
import Sort from './components/Sort';

const App = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
      <div className="linha">
        <Interval 
          min={min} 
          max={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}
        />
      </div>
      <div className="linha">
        <Average min={min} max={max}/>
        <Sum min={min} max={max}/>
        <Sort min={min} max={max}/>
      </div>
    </div>
  );
}

export default App;
