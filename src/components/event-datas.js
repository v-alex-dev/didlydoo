//import
import { getAllEvents } from "../queries/get-all-events.js";
import { getAllAttendees } from "../queries/get-all-attendees.js";
import { createTables } from "./attendees-table-injector.js";
import { btnModalPatchevent } from "./btn-modal-patch-event.js";

// export + function
export async function displayEvents() {
  const eventDatas = await getAllEvents();
  const attendeesData = await getAllAttendees();
  const mainHtml = document.createElement('main');
  document.body.appendChild(mainHtml);

  eventDatas.forEach((eventData) => {
    // create element
    const eventDataSection = document.createElement("section");
    mainHtml.appendChild(eventDataSection);
    eventDataSection.classList.add("section-data");

    const eventDataDiv = document.createElement("div");
    const eventDataH2 = document.createElement("h2");
    const eventDatah3 = document.createElement('h3')
    const eventDataP = document.createElement("p");
    const eventUpdate = btnModalPatchevent(eventData)
    // append child
    eventDataSection.appendChild(eventDataDiv);
    eventDataDiv.classList.add('section-header')
    eventDataH2.textContent = eventData.name;
    eventDatah3.textContent = eventData.author;
    eventDataDiv.appendChild(eventUpdate);
    eventDataDiv.appendChild(eventDataH2);
    eventDataDiv.appendChild(eventDatah3);
    eventDataP.textContent = eventData.description;
    eventDataDiv.appendChild(eventDataP);

    createTables(eventData, attendeesData, eventDataSection);
  });
}