// Signup
function signupUser(e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (name && email && password) {
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("Account created! You can now log in.");
    window.location.href = "login.html";
  } else {
    alert("Please fill all fields!");
  }
}

// Login
function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "profile.html";
  } else {
    alert("Invalid login credentials!");
  }
}

// Profile Load
function loadProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    document.getElementById("profileName").innerText = user.name;
    document.getElementById("profileEmail").innerText = user.email;
  }
}

// Logout
function logoutUser() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

