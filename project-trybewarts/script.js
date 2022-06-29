const loginButton = document.getElementById('login-button');

function login() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', login);

const checkbox = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

function checkboxClick() {
  if (checkbox.checked === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

checkbox.addEventListener('click', checkboxClick);
