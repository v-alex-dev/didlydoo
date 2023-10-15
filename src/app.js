import { getAllAttendees } from "./queries/get-all-attendees.js";
import { getAllEvent } from "./queries/get-all-event.js";
import { displayEvents } from "./components/event-datas.js";

const attendees = getAllAttendees();

attendees.then(data =>console.log(data))

const events = getAllEvent();

events.then(data =>console.log(data));

displayEvents();
