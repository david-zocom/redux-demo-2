import React, {Component} from 'react';
import {connect} from 'react-redux';

class History extends Component {
	render() {
		let i=0;
		const list = this.props.history.map( x => <li key={i++}>{x}</li>);
		return <div>History: <ul>{list}</ul></div>;
	}
}
											
function mapStateToProps(state) {
	return {
		history: state.history
	}
}

export default connect(mapStateToProps)(History);