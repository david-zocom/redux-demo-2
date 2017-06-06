import {ACTION_INCREASE, ACTION_DECREASE} from './actions.js';

function rootReducer(state, action) {
	switch( action.type ) {
		case ACTION_INCREASE:
			return {...state, value: state.value + 1}
		case ACTION_DECREASE:
			return {...state, value: state.value - 1}
		default:
			return {...state};
	}
}
export {rootReducer};