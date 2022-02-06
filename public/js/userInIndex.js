$(document).ready(function (){
    var token = sessionStorage.getItem("token"); //get the profile array into the index.html
    var getProfile = new XMLHttpRequest();
    getProfile.open("POST", "http://127.0.0.1:3030/users/token", true);
    getProfile.setRequestHeader("Content-Type","application/json");
    getProfile.onload= function (){
        profile = JSON.parse(getProfile.responseText)
        console.log(getProfile.responseText);
        var username = sessionStorage.setItem("username", username)}
        var payload = {token:token}
        getProfile.send(JSON.stringify(payload));
    })

