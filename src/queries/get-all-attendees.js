export async function getAllAttendees() {
	const response = await fetch('http://localhost:3000/api/attendees/').then(data => data.json());
	return response;
}