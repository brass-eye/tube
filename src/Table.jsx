import React from 'react';

export default class Table extends React.PureComponent {
	render(){
		return (<table>
			<thead>
				<tr>
					<th>Station</th>
					<th>Visits</th>
				</tr>
			</thead>
			<tbody>
					{this.props.visits.map( (visit, key) => {
						return (<tr key={key}>
											<td>{visit.name}</td>
											<td>{visit.visit_count}</td>
										</tr>);
					})}
			</tbody>
		</table>);
	}
}