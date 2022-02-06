function logoutMe() {
    $('#register').show();
    $('#login').show();
    $('#logout').hide();
    $('#welcomeMsg').hide();
    sessionStorage.removeItem("token"); //remove the token from application
    sessionStorage.removeItem("userName");
    window.location.href = "index.html" //ensure that when ever the user log outs from anywhere, they are brought back to the home page
}