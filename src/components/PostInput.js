// Function to create the dynamic form
export function createForm() {
    var formContainer = document.getElementById('form-container');
    var form = document.createElement('form');
    form.setAttribute('method', 'post'); // Set form method to POST

    var formData = {
        name: '',
        dates: Array(5).fill(null).map(_ => ({ availables: false }))
    };

    // Input field for name
    var nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name: ';
    var nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.addEventListener('input', function(event) {
        formData.name = event.target.value;
    });
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));

    // Loop to create and append the div containing True and False buttons five times
    for (var i = 0; i < 5; i++) {
        var trueButton = document.createElement('input');
        trueButton.setAttribute('type', 'button');
        trueButton.setAttribute('value', 'True');
        trueButton.classList.add('true-button');
        trueButton.addEventListener('click', function(index) {
            return function(event) {
                formData.dates[index].availables = true;
            };
        }(i));

        var falseButton = document.createElement('input');
        falseButton.setAttribute('type', 'button');
        falseButton.setAttribute('value', 'False');
        falseButton.classList.add('false-button');
        falseButton.addEventListener('click', function(index) {
            return function(event) {
                formData.dates[index].availables = false;
            };
        }(i));

        form.appendChild(document.createElement('br'));
        var var_div = document.createElement('div');
        var_div.classList.add("input_div");
        var_div.appendChild(trueButton);
        var_div.appendChild(falseButton);
        form.appendChild(var_div);
        form.appendChild(document.createElement('br'));
    }

    // Submit button
    var submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way
        console.log(formData);
    });
    form.appendChild(submitButton);

    // Append form to the container
    formContainer.appendChild(form);
}
        


