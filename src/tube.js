import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      returnedValue: {
        joke: "yo mama fat"
      };
    }
  }

  render() {
    return (
      <div className="App">
        <select name='station'>
          <option value='station_1'>bank</option>
          <option value='liverpool_street'>liverpool_street</option>
        </select>

        <input name='search' />

        <table>
          <tr>
            <th>station</th>
            <th>visits</th>
          </tr>
          <tr>
            <td>liverpool_street</td>
            <td>1</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
