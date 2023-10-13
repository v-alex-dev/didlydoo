import { getAllAttendees } from "./queries/get-all-attendees.js";
import { getAllEvent } from "./queries/get-all-event.js";
import { createTables } from "./components/attendees-table-injector.js";

const attendees = getAllAttendees();

attendees.then(data =>console.log(data))

const events = getAllEvent();

events.then(data =>console.log(data));

createTables();
