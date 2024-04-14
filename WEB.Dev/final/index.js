document.addEventListener("DOMContentLoaded", function() {
  const signUpButton = document.querySelector('.Register-btn');
  const signInButton = document.querySelector('.login-btn');
  const container = document.querySelector('.container1');

  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });
});
