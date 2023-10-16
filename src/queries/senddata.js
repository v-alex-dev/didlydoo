export async function sendData(form) {
  const formData = new FormData(form);
  const dates = [];
  formData.getAll("date").forEach((date) => {
    dates.push(date);
  });
  const data = {
    name: formData.get("name"),
    dates: dates,
    author: formData.get("author"),
    description: formData.get("description"),
  };
  console.log(data);
  fetch("http://localhost:3000/api/events", {
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
