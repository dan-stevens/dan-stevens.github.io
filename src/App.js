import React from 'react';
import logo from './logo.svg';
import { Fun } from './Fun';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is progress, progress indeed.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Fun something="new, and im so very in love with it" />
    </div>
  );
}

export default App;
