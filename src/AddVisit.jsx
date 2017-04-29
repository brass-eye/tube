import React, {Component} from 'react';
import TubeData from './tfl-tube-data.json'

export default class AddVisit extends Component {

	render() {
		return (
			<form>
				<select>
					{
						Object.keys(TubeData.stations).map( (stop, key) => {
							 return <option key={key}
							 								value={stop}>
							 								{TubeData.stations[stop]}
							 				</option>;
						})
					}
				</select>
			</form>
			)
	}


}