export const modalFormPatchEvent = (id) => {
	// Init HTMLelement
	const divModalForm = document.createElement('div');
	const form = document.createElement('form');
	const title = document.createElement('h4');
	const labelName = document.createElement('label');
	const inputName = document.createElement('input');
	const labelAuthor = document.createElement('label');
	const inputAuthor = document.createElement('input');
	const labelDescription = document.createElement('label');
	const inputDescription = document.createElement('textArea');
	const btn = document.createElement('button');

	// Add attributes
		// form
		form.action = `http://localhost:3000/api/events/${id}/`;
		form.method = 'post';
		
		//label
		labelName.setAttribute('for', 'name');
		labelName.textContent = 'name';

		labelAuthor.setAttribute('for', 'author');
		labelAuthor.textContent = 'author';

		labelDescription.setAttribute('for', 'description');
		labelDescription.textContent= 'description';
		//inputs
		inputName.placeholder = 'Event name';
		inputName.type = 'text';
		inputName.name = 'name';

		inputAuthor.placeholder = 'Author';
		inputAuthor.type = 'text';
		inputAuthor.name = 'author';

		inputDescription.placeholder = 'Descrition';
		inputDescription.name = 'description';
		//btn
		btn.type = 'submit';
	
	// AppendChild
	form.appendChild(labelName);
	form.appendChild(inputName);
	form.appendChild(labelAuthor);
	form.appendChild(inputAuthor);
	form.appendChild(inputDescription);
	form.appendChild(inputDescription);
	form.appendChild(btn);

	divModalForm.appendChild(form)
	
	btn.addEventListener('click',e=> console.log(e.target))
	return divModalForm;
}