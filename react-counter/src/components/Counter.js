import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionIncrease, actionDecrease, actionHistory} from '../actions.js';

class Counter extends Component {
	render() {
		return (
			<div>
				<button onClick={this.handleIncreaseClick}>Increase</button>
				<button onClick={this.handleDecreaseClick}>Decrease</button>
				<div>Value: {this.props.value}</div>
			</div>
		);
	}
	handleIncreaseClick = (event) => {
		this.props.dispatch(actionIncrease());
		this.props.dispatch(actionHistory(this.props.value));
	}
	handleDecreaseClick = (event) => {
		this.props.dispatch(actionDecrease());
		this.props.dispatch(actionHistory(this.props.value));
	}
}

function mapStateToProps(state) {
	return {
		value: state.value
	}
}

export default connect(mapStateToProps)(Counter);
