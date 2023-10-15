//import
import { getAllEvent } from "../queries/get-all-event.js";
import { getAllAttendees } from "../queries/get-all-attendees.js";
import { createTables } from "./attendees-table-injector.js";

// export + function
export async function displayEvents() {
  const eventDatas = await getAllEvent();
  const attendeesData = await getAllAttendees();
  console.log(eventDatas);
  console.log(attendeesData);

  eventDatas.forEach((eventData) => {
    // create element
    const eventDataSection = document.createElement("section");
    document.body.appendChild(eventDataSection);
    eventDataSection.classList.add("section-data");
    const eventDataDiv = document.createElement("div");
    const eventDataH2 = document.createElement("h2");
    const eventDataP = document.createElement("p");

    // append child
    eventDataSection.appendChild(eventDataDiv);
    eventDataH2.textContent = eventData.author + eventData.name;
    eventDataDiv.appendChild(eventDataH2);
    eventDataP.textContent = eventData.description;
    eventDataDiv.appendChild(eventDataP);

    createTables(eventData, attendeesData, eventDataSection);
  });
}