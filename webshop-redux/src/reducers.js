import Action from './actions.js';
import initialState from './state.js';


function rootReducer(state = initialState, action) {
	switch (action.type) {
		case Action.VIEW_HOME:
		default:
			return null;
	}
}

export default rootReducer;