function getSearchResult(){
    var search = new XMLHttpRequest();
    search.open("POST", "http://127.0.0.1:3030/restaurant/search",true);
    search.setRequestHeader("Content-Type", "application/json");
    search.onload = function() {
        search_result_array = JSON.parse(search.responseText);
        console.log(search_result_array);
    }
    if(search_result_array.length>0){
        displaySearchRestaurants(category)
    }
    var name = document.getElementById("name").value;
    var payload = {
        name:name
    };
    
    search.send(JSON.stringify(payload));
  }

  function displaySearchRestaurants(category) {
    var table = document.getElementById("searchTable");
    var restaurantCount = 0;
    message = restaurantCount + " Restaurants " + category;
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
  
    table.innerHTML = "";
    totalRestaurant = search_result_array.length;
    for (var count = 0; count < totalRestaurant; count++) {
      //if (restaurant_array[count].availability == category) {
      var thumbnail = search_result_array[0].home_picture;
      console.log(thumbnail);
      var name = search_result_array[0].name;
      var cell =
        '<div class="card col-md-3"><img class="card-img-top" src="' +
        thumbnail +
        '" alt="Card image cap">\
          <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' +
        count +
        '" onClick="showComments(this)"></i>\
              <h5 style="padding-left:30px;cursor:pointer" data-toggle = "modal" data-target="#restaurantModal" class="card-title" item="' +
        count +
        '" onClick="showRestaurantDetails(this)">' +
        name +
        "</h5></div>\
  </div>";
      table.insertAdjacentHTML("beforeend", cell);
      restaurantCount++;
    }
  }