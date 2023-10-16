export async function validateEvent() {
    let isValid = true;
    const datee = document.querySelectorAll(".classDate")

    if (name.length === 0) {
    isValid = false;
    alert('Title must be filled');
    } else if (name.length >= 256) {
    isValid = false;
    alert('Title must be shorter than 256 charachters');
    }
    if (author.length === 0) {
        isValid = false;
        alert('Author must be filled');
    } else if (author.length >= 256) {
        isValid = false;
        alert('Author name must be shorter than 256 charachters');
    }
    if (description.length === 0) {
        isValid = false;
        alert('Valentrain must be filled');
    } else if (description.length >=256) {
        isValid = false;
        alert('Antoine filled the Valentrain a bit too much please empty it');
    }
    for (let i=0; i<datee.length; i++){
       if (!datee.value) {
        alert('You must give a date')
       }
    }
    
    return isValid;
}
