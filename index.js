let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (username.value === "admin" && password.value === "admin") {
    window.location.href = "main.html";
  } else {
    let errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
  }
});

