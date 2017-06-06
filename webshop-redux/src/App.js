import React, { Component } from 'react';
import './App.css';
//import {connect} from 'react-redux';
import Action from './actions.js';
import ViewHome from './components/ViewHome.js';

class App extends Component {
	render() {
		//let x = connect()(App);
		//console.log('props=', this.props);//, 'state=', store.getState());
		
		return (
			<div className="App">
				<div className="App-header">
					<h1>Välkommen till hotell Party!</h1>
				</div>
				<ViewHome store={this.props.store} />
			</div>
		);
	}
}

// CONNECT enables us to write this.props.dispatch(action)
export default App;//connect()(App);
