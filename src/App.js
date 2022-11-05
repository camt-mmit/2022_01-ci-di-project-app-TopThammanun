import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [x, setX] = useState();

  useEffect(() => {
    async function getU() {
      const y = await axios.get(
        `http://localhost:8081/data`
      );
      setX(y.data.data);
    }
    getU();
  }, []);

  console.log(x);

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
          Test Spin
        </a>
        <h4>{x && `${x.join(' , ')}`}</h4>
      </header>
    </div>
  );
}

export default App;
