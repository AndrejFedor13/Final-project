const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');

function checkPasswords() {
  password1.classList.remove('valid', 'invalid');
  password2.classList.remove('valid', 'invalid');

  if (password1.value !== '' || password2.value !== '') {
    if (password1.value === password2.value && password1.value !== '') {
      password1.classList.add('valid');
      password2.classList.add('valid');
    } else {
      password1.classList.add('invalid');
      password2.classList.add('invalid');
    }
  }
}

password1.addEventListener('input', checkPasswords);
password2.addEventListener('input', checkPasswords);
