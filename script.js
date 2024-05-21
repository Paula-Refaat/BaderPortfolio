// Select form and add validation
const form = document.querySelector('form');
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');
const messageInput = form.querySelector('#message');
const submitButton = form.querySelector('form button');
const nameError = form.querySelector('.name-error');
const emailError = form.querySelector('.email-error');
const messageError = form.querySelector('.message-error');
submitButton.disabled = true;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Email validation regex :example=> example@gmail.com
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

function validateName() {
  if (nameInput.value.length < 3) {
    nameError.textContent = 'Name must be at least 3 characters';
    nameError.style.display = 'block';
    return false;
  } else {
    nameError.textContent = '';
    nameError.style.display = 'hidden';
    return true;
  }
}

function validateEmail() {
  if (emailInput.value.length === 0) {
    emailError.textContent = 'Email is required';
    emailError.style.display = 'block';
    return false;
  } else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Invalid email';
    emailError.style.display = 'block';
    return false;
  } else {
    emailError.textContent = '';
    emailError.style.display = 'hidden';
    return true;
  }
}

function validateMessage() {
  if (messageInput.value.length < 10) {
    messageError.textContent = 'Message must be at least 10 characters';
    messageError.style.display = 'block';
    return false;
  } else {
    messageError.textContent = '';
    messageError.style.display = 'hidden';
    return true;
  }
}
form.addEventListener('input', () => {
  if (
    emailInput.value.length > 0 &&
    nameInput.value.length >= 3 &&
    messageInput.value.length >= 10 &&
    emailRegex.test(emailInput.value)
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
  form.reset();
  submitButton.disabled = true;
  alert('Form submitted successfully');
});
