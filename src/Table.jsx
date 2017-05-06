import React from 'react';

export default class Table extends React.Component {
	render(){
		return (<table>
			<thead>
				<tr>
					<th>Station</th>
					<th>Visits</th>
				</tr>
			</thead>
			<tbody>
					{this.props.visits.map( (station, key) => {
						debugger;
						if (station.visits.length){
							return (<tr key={key}>
												<td>{station.name}</td>
												<td>{station.visits.length}</td>
											</tr>);
						}
					})}
			</tbody>
		</table>);
	}
}