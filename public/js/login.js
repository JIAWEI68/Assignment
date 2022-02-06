function loginMe(){
    var login = new XMLHttpRequest();

    login.open("POST", "http://127.0.0.1:3030/users/login", true);
    login.setRequestHeader("Content-Type", "application/json");
    login.onload = function (){
      $('#loginModal').modal('hide')
      var token = JSON.parse(login.responseText)
      console.log(token.result);
      if((token.result != 'incorrect password') & (token.result != "incorrect username or password")){ //check whether the password is correct or wrong
        $('#successModal').modal('show');
        document.getElementById("welcomeMsg").style.display="block"; //show these few top nav items when the login is successful.
        document.getElementById("register").style.display="none";
        document.getElementById("login").style.display="none";
        document.getElementById("logout").style.display="block";
        sessionStorage.setItem("token",token.result);
      }
      else{
        $('#failModal').modal('show');
      }
    }
  
    var username = document.getElementById("usernameLogin").value; //get the value for request.body.username in backend
    var password = document.getElementById("passwordLogin").value;
    sessionStorage.setItem("userName", username);
    console.log(username)
    var payload = {
      username:username,
      password:password
    };
    login.send(JSON.stringify(payload));
    location.reload();
  }

  function register(){
    $('#loginModal').modal('hide'); 
  }