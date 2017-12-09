import React, {Component} from 'react';
// import './App.css';
// import Search from './Search';
import Table from './Table';
import AddVisit from './AddVisit';
import stationList from './tfl-tube-data.json'

class App extends Component {

  constructor() {
    super();
    const date = new Date();

    const stations = Object.keys(stationList).reduce((acc, v, i) => {
      const station = {name: stationList[v], visits: []} ;
      acc[v] = station
      return acc;
    }, {})

    this.state = {
      visited_stations: {
        "BST": {
          name: "Baker Street",
          visits: [
            date
          ],
        }  
      },
      stations,
      selected_station: {station_code: "BST" }
    };

    this.handleAddVisit = this.handleAddVisit.bind(this);
    this.handleChange = this.handleChange.bind(this);



  }

/*  componentDidMount() {
    fetch('http://localhost:3000/stations', {method: 'get'})
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({stations: json});
      })

  }
*/


  handleAddVisit(event) {
    event.preventDefault();
    const {visited_stations, selected_station, stations} = this.state;
    const visit_date = new Date();
    const previous_visits  = visited_stations[selected_station] || stations[selected_station]
    
    previous_visits.visits.push(new Date());

    const state = {
      visited_stations: {
        ...visited_stations,
        [selected_station]: previous_visits
      }
    }

    this.setState(state);
  }

  handleChange(event) {
    this.setState({
      selected_station: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <AddVisit stations={stationList} 
                  onSubmit={ this.handleAddVisit } 
                  onChange={ this.handleChange }  
                  selected_station={this.state.selected_station}/>

        <Table visits={this.state.visited_stations}/>
      </div>
    );
  }
}

export default App;
