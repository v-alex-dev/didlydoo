import { SendAttendees } from "../queries/SendAttendeesDatas.js";

export function createForm(eventData, eventDataSection) {
  let form = document.createElement("form");

  //   form.setAttribute("method", "post"); // Set form method to POST

  //   let formData = {
  //     name: "",
  //     dates: Array()
  //       .fill(null)
  //       .map((_) => ({ availables: false })),
  //   };

  // Input field for name
  let nameLabel = document.createElement("label");
  nameLabel.textContent = "Name: ";
  let nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  //   nameInput.addEventListener("input", function (e) {
  //     formData.name = e.target.value;
  //   });
  form.appendChild(nameLabel);
  form.appendChild(nameInput);

  // Function to handle the true button click
  function handleTrueButtonClick(trueButton, falseButton, i) {
    let confirmation = confirm("Tu veux vraiment participer?");
    if (confirmation) {
      let available = true;
      let date = eventData.dates[i].date;
      let dateObject = [];
      dateObject.push({ date, available });
      trueButton.remove();
      falseButton.remove();
      console.log(dateObject);
      return dateObject;
    }
  }

  // Function to handle the false button click
  function handleFalseButtonClick(trueButton, falseButton, i) {
    let confirmation = confirm("Tu n'aime vraiment pas cette personne ?");
    if (confirmation) {
      let available = false;
      let date = eventData.dates[i].date;
      let dateObject = [];
      dateObject.push({ date, available });

      trueButton.remove();
      falseButton.remove();
      console.log(dateObject);
      return dateObject;
    }
  }

  // Loop to create and append the div containing True and False buttons three times
  for (let i = 0; i < eventData.dates.length; i++) {
    let trueButton = document.createElement("input");
    trueButton.setAttribute("type", "button");
    trueButton.setAttribute("value", "True");
    trueButton.classList.add("true-button");

    let falseButton = document.createElement("input");
    falseButton.setAttribute("type", "button");
    falseButton.setAttribute("value", "False");
    falseButton.classList.add("false-button");

    trueButton.addEventListener("click", () => {
      handleTrueButtonClick(trueButton, falseButton, i);
    });
    falseButton.addEventListener("click", () => {
      handleFalseButtonClick(trueButton, falseButton, i);
    });
    let var_div = document.createElement("div");
    var_div.classList.add("input_div");
    var_div.appendChild(trueButton);
    var_div.appendChild(falseButton);
    form.appendChild(var_div);
  }
  let subBtn = document.createElement("button");
  subBtn.setAttribute("type", "submit");
  subBtn.textContent = "Submit";
  subBtn.addEventListener("click", (e) => {
    SendAttendees(eventData, form, dateObject);
    e.preventDefault();
  });

  form.appendChild(subBtn);
  eventDataSection.appendChild(form);
}
