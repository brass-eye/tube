import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Table from './Table';

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
      visits: [{
        name: "Liverpool Street",
        visit_count: 10
      }, {
        name: "Bank",
        visit_count: 5
      }],
      total_visits: 15
    }
  }



  render() {
    return (
      <div className="App">
        <Search/>
        <Table visits={this.state.visits} />
      </div>
    );
  }
}

export default App;
