import { header } from "./layouts/header.js";
import { getAllAttendees } from "./queries/get-all-attendees.js";
import { getAllEvent } from "./queries/get-all-event.js";
import { eventDatas } from "./components/event-datas.js";

header();
eventDatas();
const attendees = getAllAttendees();
const allEvents = getAllEvent();
