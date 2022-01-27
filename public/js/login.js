function loginMe(){
    var login = new XMLHttpRequest();

    login.open("POST", "http://127.0.0.1:3030/users/login", true);
    login.setRequestHeader("Content-Type", "application/json");
    login.onload = function (){
      $('#loginModal').modal('hide')
      var token = JSON.parse(login.responseText)
      console.log(token.result);
      if(token.result != 'incorrect password'){
        $('#successModal').modal('show');
        document.getElementById("register").style.display="none";
        document.getElementById("login").style.display="none";
        document.getElementById("logout").style.display="block";
        sessionStorage.setItem("token",token.result);
      }
      else{
        $('#failModal').modal('show');
      }
    }
  
    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;

    var payload = {
      username:username,
      password:password
    };
    login.send(JSON.stringify(payload));
  }

  function register(){
    $('#loginModal').modal('hide');
  }