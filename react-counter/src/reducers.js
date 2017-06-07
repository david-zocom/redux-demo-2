import {ACTION_INCREASE, ACTION_DECREASE, STORE_HISTORY} from './actions.js';

function value(state = 0, action) {
	// state is a number
	switch( action.type ) {
		case ACTION_INCREASE:
			return state + 1;//{...state, value: state.value + 1}
		case ACTION_DECREASE:
			return state - 1;//{...state, value: state.value - 1}
		default:
			return state;//{...state};
	}
}
function history(state = [], action) {
	// state is a list
	switch( action.type ) {
		case STORE_HISTORY:
			let list = state.slice();
			list.push(action.value);
			return list;
		default:
			return state;
	}
}
export {value, history};