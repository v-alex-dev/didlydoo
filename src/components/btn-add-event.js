// create a header with title (H1)
// create a form > input (name + author + desc + input?(date)) + button(submit)

export const btnAddEvent = () => {
  const head = document.createElement("header");
  document.body.appendChild(head);
  const title = document.createElement("h1");
  title.textContent = "h1 title of the header";
  head.appendChild(title);
  const btnAdd = document.createElement("button");
  btnAdd.textContent = "Add Event";

  head.appendChild(btnAdd);
  btnAdd.addEventListener("click", () => {
    let modal = document.createElement("div");
    head.appendChild(modal);
    let inputName = document.createElement("input");
    let inputAuthor = document.createElement("input");
    let inputDesc = document.createElement("input");
    let inputDate = document.createElement("input");
    inputDate.setAttribute("type", "number");
    let formSend = document.createElement("form");
    let inputSend = document.createElement("button");
    inputSend.textContent = "Send";
    inputSend.addEventListener("click", (e) => {
      e.preventDefault();
      let name = inputName.value;
      let author = inputAuthor.value;
      let desc = inputDesc.value;
      let date = inputDate.value;
      console.log(name, author, desc, date);
      inputName.value = "";
      inputAuthor.value = "";
      inputDesc.value = "";
      inputDate.value = "";
    });

    modal.appendChild(formSend);

    formSend.appendChild(inputName);
    formSend.appendChild(inputAuthor);
    formSend.appendChild(inputDesc);
    formSend.appendChild(inputDate);
    formSend.appendChild(inputSend);

    inputDate.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        if (inputDate.value <= 12 && inputDate.value >= 2) {
          for (let i = 0; i < inputDate.value; i++) {
            let inputDate2 = document.createElement("input");
            inputDate2.setAttribute("type", "date");
            modal.appendChild(inputDate2);
          }
          inputDate.remove();
        } else {
          console.log("Please enter a valid number between 2 and 12");
        }
      }
    });
  });
};
