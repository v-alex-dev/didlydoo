import { getAllAttendees } from "../queries/get-all-attendees.js";
import { getAllEvent } from "../queries/get-all-event.js";


export async function createTables() {
    const tablesContainer = document.getElementsByClassName("tables-container");

    const attendees = await getAllAttendees();
    const events = await getAllEvent();

    events.forEach((event) => {
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      const tbody = document.createElement("tbody");

      
      const headerRow = document.createElement("tr");
      headerRow.innerHTML = `
        <th>Attendees</th>
        ${event.dates.map((dateItem) => `<th>${dateItem.date}</th>`).join('')}
      `;
      thead.appendChild(headerRow);

      
      event.dates.forEach((dateItem) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${dateItem.available ? 'V' : 'X'}</td>`;
        attendees.forEach((attendee) => {
          const attendeeDate = attendee.dates.find((date) => date.date === dateItem.date);
          row.innerHTML += `<td>${attendeeDate ? (attendeeDate.attendees ? 'V' : 'X') : 'X'}</td>`;
        });
        tbody.appendChild(row);
      });

      table.appendChild(thead);
      table.appendChild(tbody);
      tablesContainer.appendChild(table);
    });
  }

 






