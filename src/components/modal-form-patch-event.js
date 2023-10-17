import { closeModalOnClickOutside } from "../functions/close-modal-onclick-outside.js";

export const modalFormPatchEvent = (event) => {
	// Init HTMLelement
	const divModal = document.createElement('div');
  const divModalForm = document.createElement('div');
	const form = document.createElement('form');

	const labelName = document.createElement('label');
	const inputName = document.createElement('input');
	const labelAuthor = document.createElement('label');
	const inputAuthor = document.createElement('input');
	const labelDescription = document.createElement('label');
	const inputDescription = document.createElement('textArea');
	const btn = document.createElement('button');

  
	// Add attributes
    //div-modal
    divModal.classList.add('modal');
    divModalForm.classList.add('modal-form')
		// form
    form.id = event.author;
		//label
		labelName.setAttribute('for', 'name');
		labelAuthor.setAttribute('for', 'author');

		labelDescription.setAttribute('for', 'description');
		labelDescription.textContent= 'description';
		//inputs
		inputName.value = event.name;
		inputName.type = 'text';
		inputName.name = 'name';

		inputAuthor.value = event.author;
		inputAuthor.type = 'text';
		inputAuthor.name = 'author';

		inputDescription.value = event.description;
		inputDescription.name = 'description';
    inputDescription.setAttribute('rows', '5')
    const divDates = document.createElement('div')
    // for (let i = 0; i < event.dates.length; i++) {
    //   const inputDate = document.createElement('input');
    //   const labelDate = document.createElement('label');
    //   labelDate.setAttribute('for','dates');
    //   labelDate.textContent = 'date';
    //   inputDate.type = 'date';
    //   inputDate.name = 'dates'
    //   inputDate.value = event.dates[i].date;
    //   divDates.appendChild(labelDate);
    //   divDates.appendChild(inputDate);

    // }

		//btn
		btn.type = 'submit';
    btn.classList.add('btn-edit')
    btn.textContent = 'Modifiy';

	// AppendChild
	form.appendChild(labelName);
	form.appendChild(inputName);
	form.appendChild(labelAuthor);
	form.appendChild(inputAuthor);
	form.appendChild(inputDescription);
	form.appendChild(divDates);
	form.appendChild(btn);

	divModalForm.appendChild(form);

  divModal.appendChild(divModalForm);
	
	btn.addEventListener('click', (e) => {

    e.preventDefault();
    const eventPatch = {
      name:inputName.value,
      author:inputAuthor.value,
      description:inputDescription.value
    }
    if (eventPatch) {
      // Effectuez la requête PATCH uniquement si vous avez des dates à ajouter
      fetch(`http://localhost:3000/api/events/${event.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventPatch),
      })
        .then(response => {
          if(response.status === 200){
            response.json()
          }
        })
        .then(data => {
          // Traitez la réponse de l'API ici
          console.log(data);
        })
        .catch(error => {
          console.error('Erreur lors de la requête API :', error);
        });
    }
  })


  closeModalOnClickOutside(divModal)
	return divModal;
}
