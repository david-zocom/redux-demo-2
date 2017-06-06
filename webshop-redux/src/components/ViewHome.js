import React, { Component } from 'react';
//import {connect} from 'react-redux';
import Action from '../actions.js';
import MakeBooking from './MakeBooking.js';
import ViewBookings from './ViewBookings.js';

class ViewHome extends Component {
	render() {
		console.log('props=', this.props, 'state=', this.state);
		let content = (
			<div className="mainOptions">
				<div onClick={this.handleClickView}>Se bokningar</div>
				<div onClick={this.handleClickMake}>Göra bokning</div>
			</div>
		);
		const state = this.props.store.getState();
		if( state === null )
			return content;//throw new Error('NULL STATE')
		switch( state.view ) {
			case Action.VIEW_HOME:
				break;
			case Action.BOOK_ROOM:
				content = <MakeBooking/>;
				break;
			case Action.VIEW_BOOKINGS:
				content = <ViewBookings />;
				break;
			default:
				throw new Error('ViewHome: no view selected in props, state='+state);
		}
		return content;
	}
	handleClickView = (e) => {
		this.props.store.dispatch(Action.viewBookings('email@eexample.com'));
	}
	handleClickMake = (e) => {
		this.props.store.dispatch(Action.makeBooking('email@eexample.com'));
	}
}

export default ViewHome;//connect()(ViewHome);