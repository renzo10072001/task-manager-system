document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Demo credentials
  const validUsername = "admin";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    localStorage.setItem("loggedIn", true);
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid username or password!";
  }
});
