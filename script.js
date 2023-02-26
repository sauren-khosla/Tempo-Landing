const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNameInput = document.querySelector('#first-name');
  const firstName = firstNameInput.value;

  const lastNameInput = document.querySelector('#last-name');
  const lastName = lastNameInput.value;

  const emailInput = document.querySelector('#email');
  const email = emailInput.value;

  const data = {
    firstName,
    lastName,
    email,
  };

  fetch('https://us-west1-tempo-4c412.cloudfunctions.net/add-to-waitlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
