function registerMe() {
  var signUp = new XMLHttpRequest();

  signUp.open("POST", "http://127.0.0.1:3030/users/signup", true);
  signUp.setRequestHeader("Content-Type", "application/json");
  signUp.onload = function(){
    console.log("success");
    window.location.href = "index.html"
  };

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var address = document.getElementById("address").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var gender = document.getElementById("gender").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
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