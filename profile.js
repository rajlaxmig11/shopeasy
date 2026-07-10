let userName =
localStorage.getItem("userName");

let userEmail =
localStorage.getItem("userEmail");

document.getElementById(
"user-name"
).innerText =
userName || "Guest User";

document.getElementById(
"user-email"
).innerText =
userEmail || "No Email";

function logout(){

localStorage.removeItem(
"userEmail"
);

localStorage.removeItem(
"userPassword"
);

alert("Logged Out");

window.location.href =
"login.html";

}