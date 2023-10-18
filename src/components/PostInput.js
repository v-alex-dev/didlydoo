import { SendAttendees } from "../queries/SendAttendeesDatas.js";

export function createForm(eventData, eventDataSection) {
  let form = document.createElement("form");
  form.classList.add('form-attendees')
  let formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  //   form.setAttribute("method", "post"); // Set form method to POST

  //   let formData = {
  //     name: "",
  //     dates: Array()
  //       .fill(null)
  //       .map((_) => ({ availables: false })),
  //   };

  // Input field for name
  let nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("placeholder", "New Attendee")
  nameInput.classList.add("inputNameAttendee")
  //   nameInput.addEventListener("input", function (e) {
  //     formData.name = e.target.value;
  //   });
  formContainer.appendChild(nameInput);

  // Function to handle the true button click
  function handleTrueButtonClick(trueButton, falseButton, i) {
    let confirmation = confirm("Tu veux vraiment participer?");
    if (confirmation) {
      let available = true;
      let date = eventData.dates[i].date;
      let dates = {date: date,
      available: available,};
      trueButton.remove();
      falseButton.remove();
      return dates;
    }
  }

  // Function to handle the false button click
  function handleFalseButtonClick(trueButton, falseButton, i) {
    let confirmation = confirm("Tu n'aime vraiment pas cette personne ?");
    if (confirmation) {
      let available = false;
      let date = eventData.dates[i].date;
      let dates = {date: date,
      available: available,};
     
      trueButton.remove();
      falseButton.remove();
      return dates;
    }
  }
  const dates = [];

  // Loop to create and append the div containing True and False buttons three times
  for (let i = 0; i < eventData.dates.length; i++) {
    let trueButton = document.createElement("input");
    trueButton.setAttribute("type", "button");
    trueButton.setAttribute("value", "v");
    trueButton.classList.add("true-button");

    let falseButton = document.createElement("input");
    falseButton.setAttribute("type", "button");
    falseButton.setAttribute("value", "x");
    falseButton.classList.add("false-button");
  

    trueButton.addEventListener("click", () => {
      let newDate = handleTrueButtonClick(trueButton, falseButton, i);
      console.log(newDate);
      dates.push(newDate);
      console.log(dates);
    });
    falseButton.addEventListener("click", () => {
      let newDate = handleFalseButtonClick(trueButton, falseButton, i);
      dates.push(newDate);
    });
    
    let var_div = document.createElement("div");
    var_div.classList.add("input_div");
    var_div.appendChild(trueButton);
    var_div.appendChild(falseButton);
    formContainer.appendChild(var_div);
  }
  

  let subBtn = document.createElement("button");
  subBtn.setAttribute("type", "submit");
  subBtn.classList.add("btnAttendees")
  subBtn.textContent = "Submit";
  subBtn.addEventListener("click", () => {
    if (nameInput.value === 0 || nameInput.value> 75) {
      alert("name is required or must be shorter than 75 charachters!")
    } else {
      SendAttendees(eventData, form, dates);
    }
    
  });
  form.appendChild(formContainer);
  form.appendChild(subBtn);
  eventDataSection.appendChild(form);
}
