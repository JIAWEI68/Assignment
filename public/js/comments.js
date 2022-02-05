function fetchComments() {
  var request = new XMLHttpRequest();

  request.open("GET", comment_url, true);

  //This command starts the calling of the comments api
  request.onload = function () {
    //get all the comments records into our comments array
    comment_array = JSON.parse(request.responseText);
    console.log(comment_array);
  };

  request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showComments(element) {
  document.getElementById("emptyComment").innerHTML =
    "No review yet. Create one now";
  var item = element.getAttribute("item");
  currentIndex = item;
  document.getElementById("review").textContent =
    "Review for " + restaurant_array[item].name;
  document.getElementById("commentBody").textContent = "";

  for (var i = 0; i < comment_array.length; i++) {
    if (comment_array[i].restaurant_name === restaurant_array[item].name) {
      document.getElementById("emptyComment").innerHTML = "";
      selectedRestaurantId = restaurant_array[item].id;
      star = "";
      var html =
        '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' +
        i +
        '">' +
        comment_array[i].description +
        "</p>               \
                                    <small>by " +
        comment_array[i].name +
        " @ " +
        comment_array[i].time_stamp +
        "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
      document
        .getElementById("commentBody")
        .insertAdjacentHTML("beforeend", html);

      var star = "";
      for (var j = 0; j < comment_array[i].rating; j++) {
        console.log(i);
        star += "<img src='images\\stars BW.png' style='width:50px' />";
      }
      star +=
        "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" +
        i +
        "' onClick='deleteComment(this)' ></i>";
      star +=
        "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" +
        i +
        "' onClick='editComment(this)' ></i>";
      document
        .getElementById("rating" + i)
        .insertAdjacentHTML("beforebegin", star + "<br/>");
    }
  }
}

function newComment() {
  //Initialise each HTML input elements in the modal window with default value.

  rating = 0;
  document.getElementById("userComments").value = "";
  document.getElementById("nickname").value = "";
}

// Submit or send the new comment to the server to be added.
// Submit or send the new comment to the server to be added.
function addComment() {
  var token = sessionStorage.getItem("token");
  console.log(token);
  if (token != null) {
    var comment = new Object();
    comment.restaurant_id = restaurant_array[currentIndex].id;
    comment.user_id = 1;
    comment.name = document.getElementById("nickname").value;
    comment.description = document.getElementById("userComments").value;
    comment.rating = rating; // Movie ID is required by server to create new comment
    comment.restaurant_name = restaurant_array[currentIndex].name; // Movie title is required by server to create new comment
    // Value from HTML input text
    // Value from HTML input text
    comment.time_stamp = null;
    comment.profile_picture = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    console.log(comment);

    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", comment_url, true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
      console.log("new comment sent");
      fetchComments(); // fetch all comments again so that the web page can have updated comments.
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(comment));
  } else {
    $("#notLoggedInModal").modal("show");
  }
}

function rateIt(element) {
  var num = element.getAttribute("value");
  var classname = element.getAttribute("class");
  var popcorns = document.getElementsByClassName(classname);
  var classTarget = "." + classname;

  // This is another way of writing 'for' loop, which initialises the
  // popcorn images to use black and white.
  for (let popcorn of popcorns) {
    popcorn.setAttribute("src", popcornBWImage);
  }
  changePopcornImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when
// the mouse cursor hovers over the popcorn image.
function changePopcornImage(num, classTarget) {
  switch (eval(num)) {
    case 1:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", popcornImage);
      rating = 1;
      break;
    case 2:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", popcornImage);
      document
        .querySelector(classTarget + "[value='2']")
        .setAttribute("src", popcornImage);
      rating = 2;
      break;
    case 3:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", popcornImage);
      document
        .querySelector(classTarget + "[value='2']")
        .setAttribute("src", popcornImage);
      document
        .querySelector(classTarget + "[value='3']")
        .setAttribute("src", popcornImage);
      rating = 3;
      break;
    case 4:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", popcornImage);
      document
        .querySelector(classTarget + "[value='2']")
        .setAttribute("src", popcornImage);
      document
        .querySelector(classTarget + "[value='3']")
        .setAttribute("src", popcornImage);
      document
        .querySelector(classTarget + "[value='4']")
        .setAttribute("src", popcornImage);
      rating = 4;
      break;
    case 5:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", popcornImage);
      document
        .querySelector(classTarget + "[value='2']")
        .setAttribute("src", popcornImage);
      document
        .querySelector(classTarget + "[value='3']")
        .setAttribute("src", popcornImage);
      document
        .querySelector(classTarget + "[value='4']")
        .setAttribute("src", popcornImage);
      document
        .querySelector(classTarget + "[value='5']")
        .setAttribute("src", popcornImage);
      rating = 5;
      break;
  }
}
//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or movie review
function editComment(element) {
  var token = sessionStorage.getItem("token");
  var item = element.getAttribute("item");

  currentIndex = item;

  document.getElementById("editnickname").value = comment_array[item].name;
  document.getElementById("edituserComments").value =
    comment_array[item].description;
  console.log(comment_array[item].rating);
  displayColorPopcorn("editpop", comment_array[item].rating);
}

//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorPopcorn(classname, num) {
  var pop = document.getElementsByClassName(classname);
  var classTarget = "." + classname;
  for (let p of pop) {
    p.setAttribute("src", popcornBWImage);
  }
  changePopcornImage(num, classTarget);
}

//This function sends the Comment data to the server for updating
function updateComment() {
  var token = sessionStorage.getItem("token");
  if (token != null) {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
      var edit_comment_url = comment_url + "/" + comment_array[currentIndex].id;
      var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
      updateComment.open("PUT", edit_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
      updateComment.setRequestHeader("Content-Type", "application/json");
      comment_array[currentIndex].name =
        document.getElementById("editnickname").value;
      comment_array[currentIndex].description =
        document.getElementById("edituserComments").value;
      comment_array[currentIndex].rating = rating;
      updateComment.onload = function () {
        fetchComments();
      };
      updateComment.send(JSON.stringify(comment_array[currentIndex]));
    }
  } else {
    $("#notLoggedInModal").modal("show");
  }
}

//This function deletes the selected comment in a specific movie
function deleteComment(element) {
  var token = sessionStorage.getItem("token");
  if (token != null) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
      var item = element.getAttribute("item"); //get the current item
      var delete_comment_url = comment_url + "/" + comment_array[item].id;
      var eraseComment = new XMLHttpRequest();
      eraseComment.open("DELETE", delete_comment_url, true);
      eraseComment.onload = function () {
        fetchComments();
      };
      eraseComment.send();
    }
  } else {
    $("#notLoggedInModal").modal("show");
  }
}
