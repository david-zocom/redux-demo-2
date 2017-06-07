import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import * as Reducer from './reducers.js';


const initialState = {
	value: 5,
	history: []
};

let rootReducer = combineReducers({
	value: Reducer.value,
	history: Reducer.history
});
const store = createStore(rootReducer, initialState);
//store.subscribe

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
