import React from 'react';
import TubeData from './tfl-tube-data.json'

export default class AddVisit extends React.PureComponent {
	render() {
		return (
			<form onSubmit={this.props.onSubmit}>
				<select onChange={this.props.onChange}>
					{
						Object.keys(TubeData.stations).map( (stop, key) => {
							 return <option key={key}
							 								value={stop}>
							 								{TubeData.stations[stop]}
							 				</option>;
						})
					}
				</select>
				<input type='submit' />
			</form>
			)
	}


}