import { getAllEvent } from "../queries/get-all-event.js";

export function getAllDataTable() {
	const req = getAllEvent();
	const table = [];
	req.then(data => {
		console.log(data);
	});


}