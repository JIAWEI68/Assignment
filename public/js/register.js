function registerMe() {
  var signUp = new XMLHttpRequest();

  signUp.open("POST", "http://127.0.0.1:3030/users/signup", true);
  signUp.setRequestHeader("Content-Type", "application/json");
  signUp.onload = function(){
    
    $('#registerModal').modal('hide');
    $('#successModal').modal('show');
    console.log("success")
    document.getElementById("register").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("logout").style.display="block";
    sessionStorage.setItem("token",token.result);
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

