export function closeModalOnClickOutside(modalElement) {
  // Ajoute un gestionnaire d'événements de clic au document
  document.addEventListener('click', function(event) {
    // Vérifie si l'élément cliqué est l'élément en question
    if (modalElement.contains(event.target)) {
      // Fermez la modal en suppriment la div modal.
      if (event.target === modalElement) {
        modalElement.remove();
      }
    }
  });
}
