// Get references to the form and submit button
const form = document.querySelector('form');
const submitButton = document.querySelector('#submitButton');

const phoneNumberInput = document.getElementById('phone');

phoneNumberInput.addEventListener('input', function(event) {
  const input = event.target.value;
  const numbersOnly = input.replace(/[^\d()\s\-_]/g, '');
  event.target.value = numbersOnly;
});



// Add event listener to the button
submitButton.addEventListener('click', function() {
  // Check the validity of each field
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const passwordInput = document.getElementById('password');
  const confirmationPasswordInput = document.getElementById('confirmationPassword');

  const isFirstNameValid = checkValidity(firstNameInput);
  const isLastNameValid = checkValidity(lastNameInput);
  const isEmailValid = checkValidity(emailInput, 'email');
  const isPhoneValid = checkValidity(phoneInput, 'phone');
  const isPasswordValid = checkValidity(passwordInput);
  const isConfirmationPasswordValid = checkValidity(confirmationPasswordInput) && checkPasswordMatch();

  if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmationPasswordValid) {
    // All fields are valid
    console.log('All fields are valid.');
  } else {
    // Display error messages
    if (!isFirstNameValid) {
      displayErrorMessage(firstNameInput, 'Please enter a valid first name.');
    } else {
      clearErrorMessage(firstNameInput);
    }
    if (!isLastNameValid) {
      displayErrorMessage(lastNameInput, 'Please enter a valid last name.');
    } else {
      clearErrorMessage(lastNameInput);
    }
    if (!isEmailValid) {
      displayErrorMessage(emailInput, 'Please enter a valid email address.');
    } else {
      clearErrorMessage(emailInput);
    }
    if (!isPhoneValid) {
      displayErrorMessage(phoneInput, 'Please enter a valid phone number.');
    } else {
      clearErrorMessage(phoneInput);
    }
    if (!isPasswordValid) {
      displayErrorMessage(passwordInput, 'Please enter a valid password.');
    } else {
      clearErrorMessage(passwordInput);
    }
    if (!isConfirmationPasswordValid) {
      displayErrorMessage(confirmationPasswordInput, 'Passwords do not match.');
    } else {
      clearErrorMessage(confirmationPasswordInput);
    }
  }
});

// Function to check field validity
function checkValidity(inputField, fieldType) {
  const value = inputField.value.trim();
  const isValid = inputField.checkValidity();

  if (fieldType === 'email') {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return isValid && emailPattern.test(value);
  }

  if (fieldType === 'phone') {
    const phonePattern = /^(?:\+\d{1,3}\s?)?(?:\(\d{3}\)\s?)?\d{3}(?:[-\s]?)\d{4}$/;
    return isValid && phonePattern.test(value);
  }

  if (isValid && value.length > 0) {
    return true;
  }

  return false;
}

// Function to check if passwords match
function checkPasswordMatch() {
  const passwordInput = document.getElementById('password');
  const confirmationPasswordInput = document.getElementById('confirmationPassword');
  return passwordInput.value === confirmationPasswordInput.value;
}

// Function to display error message
function displayErrorMessage(inputField, message) {
  const errorMessage = inputField.nextElementSibling;
  inputField.classList.add('error'); // Add error class to input field
  errorMessage.textContent = message;
}

// Function to clear error message
function clearErrorMessage(inputField) {
  const errorMessage = inputField.nextElementSibling;
  inputField.classList.remove('error'); // Remove error class from input field
  errorMessage.textContent = '';
}
