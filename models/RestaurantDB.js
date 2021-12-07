"use strict";

var db = require('../db-connections');
class RestaurantDB{
    getAllRestaurant(callback){
    var sql = "SELECT * from reviews.restaurant"
    db.query(sql,callback);
    }
}

module.exports = RestaurantDB;