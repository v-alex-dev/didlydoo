import { validateEvent } from "./validation.js";
import { sendData } from "../queries/senddata.js";

export const btnAddEvent = () => {
  const head = document.createElement("header");
  document.body.appendChild(head);
  const title = document.createElement("h1");
  title.textContent = "h1 title of the header";
  head.appendChild(title);
  const btnAdd = document.createElement("button");
  btnAdd.textContent = "Add Event";
  head.appendChild(btnAdd);
  // event button add
  btnAdd.addEventListener("click", () => {
    let modal = document.createElement("div");
    head.appendChild(modal);
    let inputNameLabel = document.createElement("label");
    inputNameLabel.setAttribute("for", "name");
    let inputName = document.createElement("input");
    inputName.setAttribute("name", "name");
    inputName.setAttribute("type", "text");
    inputNameLabel.appendChild(inputName);
    let inputAuthorLabel = document.createElement("label");
    inputAuthorLabel.setAttribute("for", "author");
    let inputAuthor = document.createElement("input");
    inputAuthor.setAttribute("name", "author");
    inputAuthor.setAttribute("type", "text");
    inputAuthorLabel.appendChild(inputAuthor);
    let inputDescLabel = document.createElement("label");
    inputDescLabel.setAttribute("for", "description");
    let inputDesc = document.createElement("input");
    inputDesc.setAttribute("name", "description");
    inputDesc.setAttribute("type", "text");
    inputDescLabel.appendChild(inputDesc);
    let inputDate = document.createElement("input");
    inputDate.setAttribute("type", "number");
    inputDate.setAttribute("type", "number");
    let formSend = document.createElement("form");
    let inputSend = document.createElement("button");
    inputSend.textContent = "Send";

    // appendChild
    modal.appendChild(formSend);
    formSend.appendChild(inputNameLabel);
    formSend.appendChild(inputAuthorLabel);
    formSend.appendChild(inputDescLabel);
    modal.appendChild(inputDate);
    modal.appendChild(inputSend);
    // event input date
    inputDate.addEventListener("keyup", (c) => {
      if (c.key === "Enter") {
        if (validValentin(inputDate)) {
          for (let i = 0; i < inputDate.value; i++) {
            let inputDateLabel = document.createElement("label");
            let inputDate2 = document.createElement("input");
            inputDate2.setAttribute("name", "date");
            inputDate2.classList.add("classDate");
            inputDate2.setAttribute("type", "date");
            inputDateLabel.appendChild(inputDate2);
            formSend.appendChild(inputDate2);
          }
          inputDate.remove();
        }
      }
    });
    // event button send
    inputSend.addEventListener("click", (e) => {
      e.preventDefault();
      let name = inputName.value;
      console.log(name);
      let author = inputAuthor.value;
      let description = inputDesc.value;
      let numberDate = inputDate.value;
      let form = formSend;
      console.log(name, author, description, numberDate);
      if (validateEvent(name, author, description)){
        sendData(form);
      }
      inputSend.parentNode.remove();
    });
  });
};
// Validations
function validValentin(inputDate) {
  let isValid = true;
  if (inputDate.value < 2 || inputDate.value > 12) {
    alert("Please enter a valid number between 2 and 12");
    isValid = false;
  }
  return isValid;
}
