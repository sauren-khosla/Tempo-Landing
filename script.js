// select the form element
const form = document.querySelector('form');

// add event listener for form submission
form.addEventListener('submit', (event) => {
  // prevent default form submission behavior
  event.preventDefault();

  // get user's input values
  const firstNameInput = document.querySelector('#first-name');
  const firstName = firstNameInput.value;

  const lastNameInput = document.querySelector('#last-name');
  const lastName = lastNameInput.value;

  const emailInput = document.querySelector('#email');
  const email = emailInput.value;

  gapi.load('client', () => {
    // client library is loaded, now you can call gapi.client.init()
    // initialize the Google API client library
    gapi.client.init({
        apiKey: 'AIzaSyB1BVNANoCM8l0F64KDUUG1oTENMFAVYJs',
        clientId: '1072622360788-iac9qrvmaarbrhdn6ch09h2r9jt6cajl.apps.googleusercontent.com',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        scope: 'https://www.googleapis.com/auth/spreadsheets',
    }).then(() => {
        // append the form data to the Google Sheet
        const spreadsheetId = '1DB8xFnG928kJoq2aYlKtTWEfPU4mxwYC-QVCQxSJwDo';
        const range = 'Sheet1!A1:C1';
        const values = [
        [firstName, lastName, email],
        ];
        console.log(values);
        console.log("written");

        return gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values,
        },
        });
    }).then((response) => {
        console.log(response);
    });
  });
});
