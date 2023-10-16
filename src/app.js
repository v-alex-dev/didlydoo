
import { btnModalPatchevent } from "./components/btn-modal-patch-event.js";
import { getAllAttendees } from "./queries/get-all-attendees.js";
import { getAllEvents } from "./queries/get-all-events.js";
import { displayEvents } from "./components/event-datas.js";


const event = getAllEvents();

event.then(data => {
	console.log(data[0].id);

	btnModalPatchevent(data[0].id);
})

displayEvents();
