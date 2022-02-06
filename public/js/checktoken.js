$(document).ready(function (){
    var token = sessionStorage.getItem("token");//get the token in applications
    if (token != null){ //check whether there is a token
        $('#register').hide();
        $('#login').hide();
        $('#logout').show();
        $('#editMenu').show();
        $('#welcomeMsg').show();
    }
})