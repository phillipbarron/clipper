import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Clipper from './clipper';

function App() {
  const [playSound, setPlaySound] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <button className="btn btn-primary" onClick={() => setPlaySound(!playSound)}>{playSound ? 'stop' : 'start'}</button>
        {playSound &&
          <Clipper src="/correct.mp3" />
        }
      </header>
    </div>
  );
}

export default App;
