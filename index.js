let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
let loginSuccess = document.querySelector("#success-message");
btn.addEventListener("click", () => {
  if (username.value === "admin" && password.value === "admin") {
    loginSuccess.style.display = "block";
    setInterval(()=>{
      window.location.href = "main.html";
    },2000);
    
  } else {
    let errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
  }
}); 

