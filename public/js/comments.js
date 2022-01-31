function fetchComments() {
    var request = new XMLHttpRequest();

    request.open('GET', comment_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    comment_array = JSON.parse(request.responseText);
    console.log(comment_array);
    };

    request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + restaurant_array[item].name;
    document.getElementById("commentBody").textContent = "";

    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].restaurant_name === restaurant_array[item].name) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedRestaurantId = restaurant_array[item].id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + comment_array[i].description + "</p>               \
                                    <small>by " + comment_array[i].name + " @ " + comment_array[i].time_stamp + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < comment_array[i].rating; j++) {
                console.log(i);
                star += "<img src='images\\stars BW.png' style='width:50px' />";
            }
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
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
    postComment.onload = function() {
        	console.log("new comment sent");
	fetchComments(); // fetch all comments again so that the web page can have updated comments.     
    };
// Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(comment)); 
}

function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var popcorns = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let popcorn of popcorns){
        popcorn.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the popcorn image.
function changePopcornImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", popcornImage);
            rating = 5;
            break;
    }
}
