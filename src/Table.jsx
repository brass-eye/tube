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
					{Object.keys(this.props.visits).map( (station, key) => {
						return (<tr key={key}>
											<td>{this.props.visits[station].name}</td>
											<td>{this.props.visits[station].visit_count}</td>
										</tr>);
					})}
			</tbody>
		</table>);
	}
}