var express = require("express");

var restaurantController = require('./Controller/restaurantController');
var app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route('/restaurant').get(restaurantController.getAllRestaurant);




app.listen(3030, "127.0.0.1");
console.log("web server running @ http://127.0.0.1:3030")