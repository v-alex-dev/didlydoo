import { getAllAttendees } from "../queries/get-all-attendees.js";
import { getAllEvent } from "../queries/get-all-event.js";

export function getAllDataTable() {
	const reqEvent = getAllEvent();
	const reqAttendees = getAllAttendees();

	const table = [];
	reqEvent.then(data => {
		console.log(data);
	});
	reqAttendees.then(data => {
		console.log(data);
	})


}