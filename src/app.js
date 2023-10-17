// import { getAllAttendees } from "./queries/get-all-attendees.js";
import { getAllEvents } from "./queries/get-all-events.js";
import { displayEvents } from "./components/event-datas.js";
// import { createForm } from "./components/PostInput.js";

const event = getAllEvents();

displayEvents();

// createForm();
