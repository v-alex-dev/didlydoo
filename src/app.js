
import { btnModalPatchevent } from "./components/btn-modal-patch-event.js";
import { header } from "./layouts/header.js";
import { getAllAttendees } from "./queries/get-all-attendees.js";
import { getAllEvents } from "./queries/get-all-events.js";

header();

const event = getAllEvents();

event.then(data => {
  console.log(data);
	data.forEach(element => {
    btnModalPatchevent(element);
  });

})