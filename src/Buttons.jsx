import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    const btnList = ['VA', 'Quiz', 'Report'];
    const { runPy } = this.props;

    return (
      <div className="btn-group">
        {
          btnList.map(val => <button type="button" key={val} onClick={runPy} className={`btn btn-${val}`}>{val}</button>)
        }
      </div>
    );
  }
}

export default Buttons;
