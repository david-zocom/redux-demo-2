import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux';
//import { Provider } from 'react-redux';
import rootReducer from './reducers.js';
import initialState from './state.js';

const store = createStore(rootReducer, initialState);

/*let unsubscribe =*/ store.subscribe(
	() => console.log(store.getState())
);

ReactDOM.render(
	/*<Provider store={store}>*/
		<App store={store} />
	/*</Provider>*/,
	document.getElementById('root'));
registerServiceWorker();
