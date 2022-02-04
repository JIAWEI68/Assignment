
function registerMe() {
  var signUp = new XMLHttpRequest();
  signUp.open("POST", "http://127.0.0.1:3030/users/signup", true);
  signUp.setRequestHeader("Content-Type", "application/json");
  signUp.onload = function(){
    console.log("registerrrrr")
  };

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var address = document.getElementById("address").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var gender = document.getElementById("gender").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var letters = /^[A-Za-z]+$/;
if(username == ""){
  alert("Username is required")
}
else if(password == ""){
  alert("Password is required")
}
else if(address == ""){
  alert("Address is required")
}
else if(!letters.test(firstName)){
  alert("Alphabets are only allowed for first name")
}
else if(firstName == ""){
  alert("First Name is required")
}
else if(!letters.test(lastName)){
  alert("Alphabets are only allowed for last name")
}
else if(lastName == ""){
  alert("Last Name is required")
}
else if(email==""){
  alert("Email is required")
}
else if(letters.test(phoneNumber)){
  alert("Only numbers are allowed for phone number")
}
else if(phoneNumber == ""){
  alert("Phone Number is required")
}
else{
alert("Registration Success, Redirecting you to home page")
console.log("success");
window.location.href = "index.html"
}
  var payload = {
    username:username,
    password:password,
    address:address,
    firstName:firstName,
    lastName:lastName,
    gender:gender,
    email:email,
    phoneNumber:phoneNumber
  };
  signUp.send(JSON.stringify(payload));
}

function closeRegister(){
  window.location.href = "index.html"
}