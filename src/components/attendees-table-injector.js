import { getAllAttendees } from "../queries/get-all-attendees.js";

export async function createTables(eventData, container) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
  
    // Headers
    const headerRow = document.createElement("tr");
    thead.appendChild(headerRow);

    const attendeesHeader = document.createElement("th");
    attendeesHeader.textContent = "Attendees";
    headerRow.appendChild(attendeesHeader);

    for (let i = 0, length = eventData.dates.length; i < length; i++) {
      const date = eventData.dates[i];
      const dateHeader = document.createElement("th");
      dateHeader.textContent = date;
      headerRow.appendChild(dateHeader);
    }
  
    // Body
   
  
    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
  }
  
  
  
  
  
  
 






