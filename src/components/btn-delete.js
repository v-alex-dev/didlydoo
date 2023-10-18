export const btnDelete = (id) => {
  const btn = document.createElement('button');

  btn.textContent = 'Delete';
  btn.classList.add('btn-delete')

  btn.addEventListener('click', () => {
    fetch(`http://localhost:3000/api/events/${id}`, {
      method: 'Delete',
    })
      .then(response => {
        if(response.status === 200){
          alert('Events delete')
        }
      })
      .catch(error => {
        console.error('Erreur lors de la requête API :', error);
      });
  })

  return btn;
}
