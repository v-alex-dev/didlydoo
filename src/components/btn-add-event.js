import { postNewEvent } from "../queries/postNewEvent.js"

export const btnAddEvent = () => {
	// create btn DOM
	const btn = document.createElement('button')

	// Add attributes

	// function on button
	btn.addEventListener('click', () => {
		postNewEvent()
	})

	return btn
}