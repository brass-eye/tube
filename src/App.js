import React, { Component } from 'react';
// import './App.css';
import Search from './Search';
import Table from './Table';
import AddVisit from './AddVisit';
import TubeData from './tfl-tube-data.json'

class App extends Component {

  constructor() {
    super();
    this.state = {
      visits: {}
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
    var selected_station = this.state.selected_station;
    var visits = this.state.visits;

    if (visits[selected_station]){
      visits[selected_station].visit_count++;
      this.setState({
        visits
      });
    } else {
      this.setState({
        visits: {
          ...visits,
          [selected_station]:{
            name: TubeData.stations[selected_station],
            visit_count: 1
          }
      }});
    }
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
