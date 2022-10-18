import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cars from "./Cars";

function App() {
    const a:Array<any> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'Honda', model: 'civic'}
        ]
  return (
    <div className="App">
      <Cars
topcars={a}
      />
    </div>
  );
}

export default App;
