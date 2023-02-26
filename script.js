// select the form element
const form = document.querySelector('form');

// add event listener for form submission
form.addEventListener('submit', (event) => {
  // prevent default form submission behavior
  event.preventDefault();

  // get user's email input
  const emailInput = document.querySelector('#email');
  const email = emailInput.value;

  // do something with email (e.g., send to server, save to local storage)
  console.log(`Email: ${email}`);
});
