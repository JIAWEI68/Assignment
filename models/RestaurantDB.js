"use strict";

var db = require('../db-connections');
class RestaurantDB{
    getAllRestaurant(callback){
    var sql = "SELECT * from reviews.restaurant"
    db.query(sql,callback);
    }
    getAllRestaurantCuisine(callback){
    var sql = "SELECT cuisine from reviews.restaurant"
    db.query(sql,callback);
    }
    getJapRestaurant(callback){
    var sql = "SELECT * FROM reviews.restaurant WHERE cuisine = 'Japenese'"
    db.query(sql,callback)
    }
    getChineseRestaurant(callback){
    var sql = "SELECT * FROM reviews.restaurant WHERE cuisine = 'Chinese'"
    db.query(sql,callback)
    }
    getWesternRestaurant(callback){
    var sql = "SELECT * FROM reviews.restaurant WHERE cuisine = 'Western'"
    db.query(sql,callback)
    }
    getIndianRestaurant(callback){
    var sql = "SELECT * FROM reviews.restaurant WHERE cuisine = 'Indian'"
    db.query(sql,callback)
    }
    getMalayRestaurant(callback){
    var sql = "SELECT * FROM reviews.restaurant WHERE cuisine = 'Malay'"
    db.query(sql,callback)
    }
    getNorthRestaurant(callback){
    var sql = "SELECT * FROM reviews.restaurant WHERE compass_location = 'North'"
    db.query(sql,callback);
    }
    getSouthRestaurant(callback){
    var sql = "SELECT * FROM reviews.restaurant WHERE compass_location = 'South'"
    db.query(sql,callback);
    }
    getEastRestaurant(callback){
    var sql = "SELECT * FROM reviews.restaurant WHERE compass_location = 'East'"
    db.query(sql,callback);
    }
    getWestRestaurant(callback){
    var sql = "SELECT * FROM reviews.restaurant WHERE compass_location = 'West'"
    db.query(sql,callback)
    }
    

}

module.exports = RestaurantDB;