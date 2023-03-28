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

    const source = document.querySelector("#source");
    const sourceValue = source.value;

    const friend1 = document.querySelector("#friend-1");
    const friend2 = document.querySelector("#friend-1");
    const friend3 = document.querySelector("#friend-1");
    const friend1Val = friend1.value;
    const friend2Val = friend2.value;
    const friend3Val = friend3.value;

    const data = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        source: sourceValue,
        friend1: friend1Val,
        friend2: friend2Val,
        friend3: friend3Val,
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
