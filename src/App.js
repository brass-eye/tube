import React, { Component } from 'react';
// import './App.css';
import Search from './Search';
import Table from './Table';
import AddVisit from './AddVisit';
import TubeData from './tfl-tube-data.json'

class App extends Component {

  constructor() {
    super();

    let self = this;

    fetch("http://localhost:4567/visits", {method: 'get'})
      .then(response => {
          return response.json()
        })
      .then(json => {
        // self.setState(json);
      })

    this.state = {
      visits: { LST: {
        name: "Liverpool Street",
        visit_count: 10
      }, BNK: {
        name: "Bank",
        visit_count: 5
      }},
      total_visits: 15
    }

    this.handleSubmit  = this.handleSubmit.bind(this);
    this.handleChange  = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    console.log('tried to submit: ' + this.state.selected_station);
    var visits = this.state.visits;
    var selected_station = this.state.selected_station;
    visits[selected_station].visit_count++;
    this.setState({
      ...this.state,
      visits
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.state.selected_station = event.target.value;
  }

  render() {
    return (
      <div className="App">
        <Search/>
        <Table visits={this.state.visits} />
        <AddVisit onSubmit={this.handleSubmit} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
