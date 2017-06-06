import React, { Component } from 'react';
import '../App.css';
import Counter from './Counter.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Welcome to React</h2>
				</div>

				<Counter />
			</div>
		);
	}
}

export default App;
