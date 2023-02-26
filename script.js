const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstNameInput = document.querySelector('#first-name');
    const firstNameValue = firstNameInput.value;

    const lastNameInput = document.querySelector('#last-name');
    const lastNameValue = lastNameInput.value;

    const emailInput = document.querySelector('#email');
    const emailValue = emailInput.value;

    const data = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    email: emailValue,
    };
    
    fetch('https://us-west1-tempo-4c412.cloudfunctions.net/add-to-waitlist', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    
    // Disable the button and change its text
    submitButton.disabled = true;
    submitButton.textContent = 'You\'ve been added!';
    submitButton.classList.add('disabled');
});
