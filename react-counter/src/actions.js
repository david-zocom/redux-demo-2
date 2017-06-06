const ACTION_INCREASE = 'INCREASE', ACTION_DECREASE = 'DECREASE';

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

export {ACTION_INCREASE, ACTION_DECREASE,
	actionIncrease, actionDecrease};
