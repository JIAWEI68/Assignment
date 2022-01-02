var express = require("express");

var restaurantController = require('./Controller/restaurantController');
var commentController = require('./Controller/commentController');
var usersController = require('./Controller/usersController');
var app = express();

app.use(express.static("./public"));
app.use(express.json());

//comments route methods
app.route('/comments').get(commentController.getAllComments);
app.route('/comments/add').post(commentController.addComment);
app.route('/comments/update/:id').put(commentController.updateComment);
app.route('/comments/delete/:id').delete(commentController.deleteComment)

//users route methods
app.route('/users').get(usersController.getAllUsers);
app.route('/users/signup').post(usersController.signUp);
app.route('/users/login').get(usersController.login)
app.route('/users/update/:id').put(usersController.updateUser)
app.route('/users/delete/:id').delete(usersController.deleteUser);
app.route('/users/:id').get(usersController.getUser);




//restaurant route methods
app.route('/restaurant').get(restaurantController.getAllRestaurant);
app.route('/restaurant/cuisine').get(restaurantController.getRestaurantCuisine);
app.route('/restaurant/north').get(restaurantController.getNorthRestaurant);
app.route('/restaurant/south').get(restaurantController.getSouthRestaurant);
app.route('/restaurant/east').get(restaurantController.getEastRestaurant);
app.route('/restaurant/west').get(restaurantController.getWestRestaurant);
app.route('/restaurant/japenese').get(restaurantController.getJapRestaurant);
app.route('/restaurant/malay').get(restaurantController.getMalayRestaurant);
app.route('/restaurant/chinese').get(restaurantController.getChineseRestaurant);
app.route('/restaurant/indian').get(restaurantController.getIndianRestaurant);
app.route('/restaurant/western').get(restaurantController.getWesternRestaurant);
app.route('/restaurant/search/:name').get(restaurantController.search);



app.listen(3030, "127.0.0.1");
console.log("web server running @ http://127.0.0.1:3030")