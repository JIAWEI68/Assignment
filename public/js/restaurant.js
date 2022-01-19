//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getRestaurantData() {
  var request = new XMLHttpRequest();
  request.open("GET", restaurant_url, true);
  //This function will be called when data returns from the web api
  request.onload = function () {
    //get all the movies records into our movie array
    restaurant_array = JSON.parse(request.responseText);
    //Fetch the comments as well
    //fetchComments();
    console.log(restaurant_array); // output to console
    //call the function so as to display all movies tiles for "Now Showing"
    displayRestaurants(category);
  };

  //This command starts the calling of the movies web api
  request.send();
}

function displayRestaurants(category) {
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;
  message = restaurantCount + " Restaurants " + category;
  document.getElementById("summary").textContent = message;
  document.getElementById("parent").textContent = "";

  table.innerHTML = "";
  totalRestaurant = restaurant_array.length;
  for (var count = 0; count < totalRestaurant; count++) {
    //if (restaurant_array[count].availability == category) {
      var thumbnail = restaurant_array[count].home_picture;
      console.log(thumbnail);
      var title = restaurant_array[count].name;
      var cell =
        '<div class="card col-md-3" ><img class="card-img-top" src="' +
        thumbnail +
        '" onClick="showMovieComments(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restaurant" class="card-title" item="' +
        count +
        '" onClick="showMovieDetails(this)">' +
        title +
        "</h5></div>\
</div>";
      table.insertAdjacentHTML("beforeend", cell);
      restaurantCount++;
    }
}
