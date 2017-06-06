class ActionClass {
	constructor() {
		this.VIEW_HOME = 'VIEW_HOME';
		this.BOOK_ROOM = 'BOOK_ROOM';
		this.VIEW_BOOKINGS = 'VIEW_BOOKINGS';
	}

	home() {
		return {
			type: this.VIEW_HOME
		}
	}
	book(bookDate, roomNumber, email) {
		return {
			type: this.BOOK_ROOM,
			bookingToMake: {
				bookDate,
				roomNumber,
				email
			}
		};
	}
	viewBookings(email) {
		return {
			type: this.VIEW_BOOKINGS,
			emailToView: email
		};
	}
};
const Action = new ActionClass();

export default Action;
