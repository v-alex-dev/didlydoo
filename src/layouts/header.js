import { btnAddEvent } from "../components/btn-add-event"

export const header = () => {
	
	//Init htmlElement
	const newBtn = btnAddEvent()
	const header = document.createElement('header');


	// appendChild
	// header
	header.appendChild(newBtn);
	// section.title
	

}