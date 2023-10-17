export async function createTables(eventData, attendeesData, container) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Table header
  const headerRow = document.createElement("tr");
  thead.appendChild(headerRow);

  const attendeesHeader = document.createElement("th");
  attendeesHeader.textContent = "Attendees";
  headerRow.appendChild(attendeesHeader);

  for (let i = 0; i < eventData.dates.length; i++) {
    const dateHeader = document.createElement("th");
    dateHeader.textContent = eventData.dates[i].date;
    headerRow.appendChild(dateHeader);
  }

  // Table Body
  const attendeesForEvent = attendeesData.filter((attendee) => {
    return attendee.events.some((event) => event.id === eventData.id);
  });


  for (let i = 0; i < attendeesForEvent.length; i++) {
    const attendeeData = attendeesForEvent[i];
    const row = document.createElement("tr");

  
    const nameCell = document.createElement("td");
    nameCell.textContent = attendeeData.name;
    row.appendChild(nameCell);

   
    for (let j = 0; j < eventData.dates.length; j++) {
      const event = attendeeData.events.find((event) => event.id === eventData.id);
      const date = event.dates.find((d) => d.date === eventData.dates[j].date);

      const classV = 'here'
      const classX = 'not-here'
      
      const dateCell = document.createElement("td");
      date ? (date.available ? dateCell.classList.add(classV) : dateCell.classList.add(classX)) : dateCell.classList.add(classX);
      
      row.appendChild(dateCell);
    }

    tbody.appendChild(row);
  }

  // Put the table in it's container
  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);
}
