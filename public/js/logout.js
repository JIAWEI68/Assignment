function logoutMe() {
    $('#register').show();
    $('#login').show();
    $('#logout').hide();
    sessionStorage.removeItem("token");
}