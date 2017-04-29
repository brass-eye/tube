import React, { Component } from 'react';
// import './App.css';
import Search from './Search';
import Table from './Table';
import AddVisit from './AddVisit';

class App extends Component {

  constructor() {
    super();

    let self = this;

    fetch("http://localhost:4567/visits", {method: 'get'})
      .then(response => {
          return response.json()
        })
      .then(json => {
        self.setState(json);
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

    this.handleSubmit  = this.handleSubmit.bind(this);
    this.handleChange  = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    console.log('tried to submit: ' + this.state.selected_station);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      selected_station: event.target.value});
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
