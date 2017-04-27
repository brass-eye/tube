import React, { Component } from 'react';
import './App.css';

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
        <p>{this.state.returnedValue.joke}</p> 
      </div>
    );
  }
}

export default App;
