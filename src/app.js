
import { btnModalPatchevent } from "./components/btn-modal-patch-event.js";
import { getAllAttendees } from "./queries/get-all-attendees.js";
import { getAllEvent } from "./queries/get-all-event.js";
import { displayEvents } from "./components/event-datas.js";


const event = getAllEvents();

event.then(data => {
	console.log(data[0].id);

	btnModalPatchevent(data[0].id);
})

displayEvents();
