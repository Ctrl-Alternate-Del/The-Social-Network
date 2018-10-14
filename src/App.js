import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons';

const { ipcRenderer } = window.require('electron');


class App extends Component {
  state = {
    VAInitialized: false,
  }

  runPy = () => {
    console.log(ipcRenderer.sendSync('runPy'));
    this.setState({
      VAInitialized: true,
    });
  }

  render() {
    const { VAInitialized } = this.state;
    return (
      <div className="App">
        <div className="nav">
          <h1>the_social_network</h1>
        </div>
        {!VAInitialized ? <Buttons runPy={this.runPy} /> : ' '}
      </div>
    );
  }
}

export default App;
