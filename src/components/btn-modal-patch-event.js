import { modalFormPatchEvent } from "./modal-form-patch-event.js";

export const btnModalPatchevent = (event) =>{
	const btn = document.createElement('button')
	
	btn.textContent = 'test';


	btn.addEventListener('click', () => {
		document.body.appendChild(modalFormPatchEvent(event))
	})

	document.body.append(btn)

}