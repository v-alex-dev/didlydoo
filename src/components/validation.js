export async function validateEvent() {
    let isValid = true;

    if (name.length === 0) {
    isValid = false;
    } else if (name.length >= 256) {
    isValid = false;
    }
    if (author.length === 0) {
        isValid = false;
    } else if (author.length >= 256) {
        isValid = false;
    }
    if (description.length === 0) 

    return isValid;
}
