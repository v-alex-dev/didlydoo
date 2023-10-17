//
export async function SendAttendees(eventData, form, dateObject) {
  let id = eventData.id;
  const formData = new FormData(form);

  const dates = [];
  formData.getAll("dateObject").forEach((dateObject) => {
    dates.push(dateObject);
  });

  const data = {
    name: formData.get("name"),
    dates: dates,
  };

  console.log(data);
  fetch(`http://localhost:3000/api/events/api/events/${id}/attend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      form.reset();
    })
    .catch((error) => console.error(error));
}
