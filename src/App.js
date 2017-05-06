import React, { Component } from 'react';
// import './App.css';
// import Search from './Search';
import Table from './Table';
import AddVisit from './AddVisit';
import TubeData from './tfl-tube-data.json'

class App extends Component {

  constructor() {
    super();
    this.state = {
      stations: []
    }

    this.handleAddVisit  = this.handleAddVisit.bind(this);
    this.handleChange  = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch("http://localhost:3000/stations", {method: 'get'})
      .then(response => {
          return response.json()
        })
      .then(json => {
        this.setState({stations: json});
      })
    
  }

  handleAddVisit(event) {
    var selected_station = this.state.selected_station;
    var stations = this.state.stations;
    var visit_date = new Date();
    var visited_station = stations.find(x => x.id == selected_station)

    visited_station.visits.push({
      visit_date: visit_date
    });

    this.setState({
      visited_stations: {
        ...stations,
        visited_station
    }});

    var payload = { 
      visit: { 
        station_id: selected_station,
        visit_date: visit_date
      }
    };

    fetch("http://localhost:3000/visits", {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
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
        <AddVisit onSubmit={this.handleAddVisit} onChange={this.handleChange}/>
        <Table visits={this.state.stations} />
      </div>
    );
  }
}

export default App;
