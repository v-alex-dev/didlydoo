import { modalFormPatchEvent } from "./modal-form-patch-event.js";

export const btnModalPatchevent = (event) =>{
	const btn = document.createElement('button')
	
	btn.textContent = 'Edit ?';
  btn.classList.add('btn', 'btn-update');


	btn.addEventListener('click', () => {
    if(document.getElementById(event.author) !== event.author)
		document.body.appendChild(modalFormPatchEvent(event))
	})

	return btn

}