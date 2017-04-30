import React, { Component } from 'react';
// import './App.css';
import Search from './Search';
import Table from './Table';
import AddVisit from './AddVisit';

class App extends Component {

  constructor() {
    super();
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

  componentDidMount(){
    fetch("http://localhost:4567/visits", {method: 'get'})
      .then(response => {
          return response.json()
        })
      .then(json => {
        this.setState(json);
      })
  }

  handleSubmit(event) {
    console.log('tried to submit: ' + this.state.selected_station);
    var visits = this.state.visits;
    var selected_station = this.state.selected_station;
    visits[selected_station].visit_count++;
    this.setState({
      visits
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      selected_station: event.target.value
    })
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
