import React, { Component } from 'react';
import Dashboard from "./components/Dashboard";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>This is the sports ball counter App</h1>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;
