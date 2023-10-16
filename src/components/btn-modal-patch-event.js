import { modalFormPatchEvent } from "./modal-form-patch-event.js";

export const btnModalPatchevent = (id) =>{
	const btn = document.createElement('button')
	
	btn.textContent = 'test';


	btn.addEventListener('click', () => {
		document.body.appendChild(modalFormPatchEvent(id))
	})

	document.body.append(btn)

}