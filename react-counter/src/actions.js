const ACTION_INCREASE = 'INCREASE', ACTION_DECREASE = 'DECREASE';
const STORE_HISTORY = 'HISTORY';

function actionIncrease() {
	return {
		type: ACTION_INCREASE,
		value: 1
	}
}
function actionDecrease() {
	return {
		type: ACTION_DECREASE,
		value: 1
	}
}

function actionHistory(value) {
	return {
		type: STORE_HISTORY,
		value
	}
}

export {ACTION_INCREASE, ACTION_DECREASE, STORE_HISTORY,
	actionIncrease, actionDecrease, actionHistory};
