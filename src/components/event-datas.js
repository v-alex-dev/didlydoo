//import
import { getAllEvent } from "../queries/get-all-event.js";

// export + function
export function eventDatas() {
  const eventDataTitle = getAllEvent();

  eventDataTitle.then((eventDatas) => {
    console.log(eventDatas);

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
    });
  });
}
