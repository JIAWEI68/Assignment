//send the email when the user presses send
function sendEmail(){
    var emailUser = new XMLHttpRequest();

    emailUser.open("POST", "http://127.0.0.1:3030/email", true);
    emailUser.setRequestHeader("Content-Type", "application/json");
    emailUser.onload = function (){
      var token = JSON.parse(emailUser.responseText)
      console.log(token.result);
      if(token.result == 'success'){
        $('#successModal').modal('show');
      }
      else{
        $('#failModal').modal('show');
      }
    }
  
    var email = document.getElementById("email").value; //get the value of what the user has typed in in mail.html
    var content = document.getElementById("content").value; 

    var payload = {
      email:email,
      content:content
    };
    emailUser.send(JSON.stringify(payload)); //send the payload
  }