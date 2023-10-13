import { header } from "./layouts/header.js";
import { getAllAttendees } from "./queries/get-all-attendees.js";

header();
const attendees = getAllAttendees();

attendees.then(data =>console.log(data))