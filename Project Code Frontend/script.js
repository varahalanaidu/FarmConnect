document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signup-form');
  const passwordInput = document.getElementById('password');
  const reverifyPasswordInput = document.getElementById('reverifyPassword');
  const passwordMatchError = document.getElementById('passwordMatchError');

  form.addEventListener('submit', function(event) {
      if (passwordInput.value !== reverifyPasswordInput.value) {
          event.preventDefault();
          passwordMatchError.style.display = 'block';
      } else {
          passwordMatchError.style.display = 'none';
      }
  });
});
