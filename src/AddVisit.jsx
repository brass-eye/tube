import React from 'react';

export default class AddVisit extends React.PureComponent {
	constructor() {
		super();

		this.state = {stations: []};
	}

	componentDidMount(){
    fetch("http://localhost:3000/stations", {method: 'get'})
      .then(response => {
          return response.json()
        })
      .then(json => {
      	this.setState({
      		stations: json,
      		value: 1,
      	});
      })
	}


	render() {
		return (
			<form onSubmit={this.props.onSubmit}>
				<select onChange={this.props.onChange}>
					{
						this.state.stations.map( (stop, key) => {
							 return <option key={key}
							 								value={stop.id}>
							 								{stop.name}
							 				</option>;
						})
					}
				</select>
				<input type='submit' />
			</form>
			)
	}


}