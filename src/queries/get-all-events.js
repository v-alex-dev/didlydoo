export async function  getAllEvents() {
	const response = await fetch('http://localhost:3000/api/events/').then(data => data.json());
	return response;
}