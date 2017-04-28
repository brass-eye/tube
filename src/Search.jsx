import React, {Component} from 'react';

export default class Search extends Component {
	render() {
		return(
			<form>
				<input type='text' value={this.props.value} />
				<input type='submit' />
			</form>
		);
	}

}