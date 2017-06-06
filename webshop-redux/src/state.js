import Action from './actions.js';

const initialState = {
	view: Action.VIEW_HOME,
	bookings: [
		{
			bookDate: '2017-06-07',
			roomNumber: 277,
			email: 'email@example.com'
		}
	],
	bookingToMake: null,
	emailToView: null
}

export default initialState;