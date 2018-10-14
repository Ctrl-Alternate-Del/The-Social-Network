import React, { Component } from 'react';
import './App.css';

const { ipcRenderer } = window.require('electron');

class App extends Component {
  runPy = () => {
    console.log(ipcRenderer.sendSync('runPy'));
  }

  render() {
    return (
      <div className="App">
        <button type="button" className="start-button" onClick={this.runPy}>Start VA</button>
      </div>
    );
  }
}

export default App;
