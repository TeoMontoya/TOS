// Get references to the form and submit button
const form = document.querySelector('form');
const submitButton = document.querySelector('#submitButton');

// Add event listener to the button
submitButton.addEventListener('click', function() {
  const fieldIds = ['first-name', 'last-name', 'email', 'phone', 'password', 'confirmationPassword'];
  let isFormValid = true;

  fieldIds.forEach(fieldId => {
    const inputField = document.getElementById(fieldId);
    const fieldType = getFieldValidationType(fieldId);
    const isValid = checkValidity(inputField, fieldType);

    if (!isValid) {
      displayErrorMessage(inputField);
      isFormValid = false;
    } else {
      clearErrorMessage(inputField);
    }
  });

  if (isFormValid) {
    console.log('All fields are valid.');
  }
});

// Function to determine the validation type of a field
function getFieldValidationType(fieldId) {
  if (fieldId === 'email') {
    return 'email';
  } else if (fieldId === 'phone') {
    return 'phone';
  }
  return null;
}

// Function to check field validity
function checkValidity(inputField, fieldType) {
  const value = inputField.value.trim();
  const isValid = inputField.checkValidity();

  if (fieldType === 'email') {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return isValid && emailPattern.test(value);
  }

  if (fieldType === 'phone') {
    const phonePattern = /^(?:\+?\d{1,2}\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return isValid && phonePattern.test(value);
  }

  return isValid && value.length > 0;
}

// Function to display error message
function displayErrorMessage(inputField) {
  const errorMessage = inputField.nextElementSibling;
  inputField.classList.add('error'); // Add error class to input field
  errorMessage.textContent = getErrorMessage(inputField.id);
}

// Function to clear error message
function clearErrorMessage(inputField) {
  const errorMessage = inputField.nextElementSibling;
  inputField.classList.remove('error'); // Remove error class from input field
  errorMessage.textContent = '';
}

// Function to get the error message for a field
function getErrorMessage(fieldId) {
  switch (fieldId) {
    case 'first-name':
      return 'Please enter a valid first name.';
    case 'last-name':
      return 'Please enter a valid last name.';
    case 'email':
      return 'Please enter a mail address following the `example@example.com` format.';
    case 'phone':
      return 'Please enter a valid phone number.';
    case 'password':
      return 'Please enter a valid password.';
    case 'confirmationPassword':
      return 'Passwords do not match.';
    default:
      return '';
  }
}
