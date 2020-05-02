import React from 'react';
import './App.css';
import Characters from "./components/Character.js";

const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <Characters />
    </div>
  );
}
export default App;