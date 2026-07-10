function register(){

let email =
document.getElementById("regEmail").value;

let password =
document.getElementById("regPassword").value;

localStorage.setItem(
"userEmail",
email
);

localStorage.setItem(
"userPassword",
password
);

alert("Registration Successful");

window.location.href =
"login.html";
}

function login(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let storedEmail =
localStorage.getItem("userEmail");

let storedPassword =
localStorage.getItem("userPassword");

if(
email === storedEmail &&
password === storedPassword
){

alert("Login Successful");

window.location.href =
"products.html";

}
else{

alert("Invalid Email or Password");

}
}