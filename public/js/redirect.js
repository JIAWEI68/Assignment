$(document).ready(function (){
    var token = sessionStorage.getItem("token"); //ensure that only when there is a token, then the edit.html is able to be accessed
    if (token != null){
        $('#register').hide();
        $('#login').hide();
        $('#logout').show();
        $('#editMenu').show();
    }
    else{
        window.location.href="index.html"
    }
})