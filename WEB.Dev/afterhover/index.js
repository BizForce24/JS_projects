// Smooth scroll to a specific element
function scrollToElement(element) {
  window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
  });
}

// Function to toggle visibility of login and registration forms
function toggleForms() {
  var loginForm = document.getElementById('loginForm');
  var registerForm = document.getElementById('registerForm');

  // Toggle visibility
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';

  // Scroll to registration form
  scrollToElement(registerForm);
}

// Event listener for the register button on the login form
document.getElementById('loginRegisterBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  toggleForms();
});
