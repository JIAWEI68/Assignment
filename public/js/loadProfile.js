$(document).ready(function (){
    var getProfile = new XMLHttpRequest();

    getProfile.open("POST", "http://127.0.0.1:3030/users/token", true);
    getProfile.setRequestHeader("Content-Type","application/json");
    getProfile.onload= function (){
        var profile = JSON.parse(getProfile.responseText)
        console.log(getProfile.responseText);
        username = profile[0].username; //indicate that the data in profile array is equals to this.
        password = profile[0].password;
        address = profile[0].address;
        firstName = profile[0].first_name;
        lastName = profile[0].last_name;
        gender = profile[0].gender;
        email = profile[0].email;
        phoneNumber = profile[0].phone_number;
        profilePicture = profile[0].profile_picture;
        document.getElementById('username').value=username;
        document.getElementById('address').value=address;
        document.getElementById('firstName').value=firstName;
        document.getElementById('lastName').value=lastName;
        document.getElementById('email').value=email;
        document.getElementById('phoneNumber').value=phoneNumber;
        if (profilePicture == null) { //set a base image where if there is no image, this image will be shown instead
            console.log("picture null")
            document.getElementById('target').src = "images\\user\\avartar.png";
        }
        else{
            document.getElementById('target').src=profilePicture; //the image of the profile picture set will be shown.
        }
    }
    var payload = {token:token}
    getProfile.send(JSON.stringify(payload));
})

