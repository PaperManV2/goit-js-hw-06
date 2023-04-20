const btnSubmit = document.querySelector(".login-form button");
const loginForm = document.querySelector(".login-form");
const emailInput = loginForm.elements["email"];
const passwordInput = loginForm.elements["password"];
const loginInfo = {};

let loginEmail;
let loginPassword;

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  if (emailInput.value == "" || passwordInput.value == "") {
    window.alert("Uzupełnij wszystkie pola!");
  } else {
    loginEmail = emailInput.getAttribute("name");
    loginInfo[loginEmail] = emailInput.value;
    loginPassword = passwordInput.getAttribute("name");
    loginInfo[loginPassword] = passwordInput.value;

    console.log(loginInfo);

    loginForm.reset();
  }
});
