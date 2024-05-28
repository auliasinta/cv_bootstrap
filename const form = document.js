const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const captcha = grecaptcha.getResponse();
  if (!captcha) {
    alert('Please check the captcha form.');
    return;
  }
  // Proses login
  // ...
});