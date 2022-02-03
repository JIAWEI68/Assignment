
function encode(){

    var selectedfile = document.getElementById('myinput').files;
    if(selectedfile.length>0){
        var imageFile = selectedfile[0]
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent){
            profilePicture = fileLoadedEvent.target.result;
            document.getElementById('target').src=profilePicture;
            
        }
        URL.createObjectURL(imageFile)
    }
}

function update() {
    var updateUser = new XMLHttpRequest();
    updateUser.open("PUT","http://127.0.0.1:3030/users/update",true);
    updateUser.setRequestHeader("Content-Type","application/json");
    updateUser.onload=function (){
        $('successModal').modal('show');
    }
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    email = document.getElementById("email").value;
    phoneNumber = document.getElementById("phoneNumber").value;
    address = document.getElementById("address").value;
    username = document.getElementById("username").value;
    if(console == Error){
        alert("Image is too large")
        window.location.href = "edit.html"
    }

    var payload = {
        token:token,
        username:username,
        address:address,
        firstName:firstName,
        lastName:lastName,
        gender:gender,
        email:email,
        phoneNumber:phoneNumber,
        profilePicture:profilePicture
      };
      updateUser.send(JSON.stringify(payload));
    }
