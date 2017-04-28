import React, { Component } from 'react';
import './App.css';
import Search from './Search';

class App extends Component {

  constructor() {
    super();

    let self = this;

    fetch("http://api.yomomma.info/", {method: 'get'})
      .then(response => {
          return response.json()
        })
      .then(json => {
        self.setState({
          returnedValue: json
        });
      })

    this.state = {
      returnedValue : {
        joke: "yo mama fat"
      }
    }
  }



  render() {
    return (
      <div className="App">
        <Search value={this.state.returnedValue.joke} />
      </div>
    );
  }
}

export default App;
