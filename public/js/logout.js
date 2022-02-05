function logoutMe() {
    $('#register').show();
    $('#login').show();
    $('#logout').hide();
    sessionStorage.removeItem("token");
    window.location.href = "index.html"
}