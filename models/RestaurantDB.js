"use strict";

var db = require("../db-connections");
class RestaurantDB {
  getAllRestaurant(callback) {
    var sql = "SELECT * from reviews.restaurant";
    db.query(sql, callback);
  }
  getAllRestaurantCuisine(callback) {
    var sql = "SELECT * cuisine from reviews.restaurant";
    db.query(sql, callback);
  }
  getJapRestaurant(callback) {
    var sql =
      "SELECT rest.id AS id, rest.name AS name, rest.location AS location, rest.map AS map, rest.telephone_number AS telephone_number, rest.opening_hours AS opening_hours, rest.description AS description, rest.rating AS rating, rest.cuisine AS cuisine, rest.compass_location AS compass_location, rest.title_picture AS title_picture, rest.description_picture AS description_picture FROM reviews.restaurant rest WHERE cuisine = 'Japenese'";
    db.query(sql, callback);
  }
  getChineseRestaurant(callback) {
    var sql =
      "SELECT rest.id AS id, rest.name AS name, rest.location AS location, rest.map AS map, rest.telephone_number AS telephone_number, rest.opening_hours AS opening_hours, rest.description AS description, rest.rating AS rating, rest.cuisine AS cuisine, rest.compass_location AS compass_location, rest.title_picture AS title_picture, rest.description_picture AS description_picture FROM reviews.restaurant rest WHERE cuisine = 'Chinese'";
    db.query(sql, callback);
  }
  getWesternRestaurant(callback) {
    var sql =
      "SELECT a.id, a.name, a.location, a.map, a.telephone_number, a.opening_hours, a.description, a.rating, a.cuisine, a.compass_location, a.title_picture, a.description_picture FROM reviews.restaurant a WHERE a.cuisine IN ('Western')";
    db.query(sql, callback);
  }
  getIndianRestaurant(callback) {
    var sql =
      "SELECT rest.id AS id, rest.name AS name, rest.location AS location, rest.map AS map, rest.telephone_number AS telephone_number, rest.opening_hours AS opening_hours, rest.description AS description, rest.rating AS rating, rest.cuisine AS cuisine, rest.compass_location AS compass_location, rest.title_picture AS title_picture, rest.description_picture AS description_picture FROM reviews.restaurant rest WHERE cuisine = 'Indian'";
    db.query(sql, callback);
  }
  getMalayRestaurant(callback) {
    var sql =
      "SELECT b.id,b.name,b.location,b.map,b.telephone_number,b.opening_hours,b.description,b.rating,b.cuisine,b.compass_location,b.title_picture,b.description_picture FROM reviews.restaurant b WHERE cuisine = 'Malay'";
    db.query(sql, callback);
  }
  getNorthRestaurant(callback) {
    var sql =
      "SELECT c.id,c.name,c.location,c.map,c.telephone_number,c.opening_hours,c.description,c.rating,c.cuisine,c.compass_location,c.title_picture,c.description_picture FROM reviews.restaurant c WHERE compass_location = 'North'";
    db.query(sql, callback);
  }
  getSouthRestaurant(callback) {
    var sql =
      "SELECT rest.id AS id, rest.name AS name, rest.location AS location, rest.map AS map, rest.telephone_number AS telephone_number, rest.opening_hours AS opening_hours, rest.description AS description, rest.rating AS rating, rest.cuisine AS cuisine, rest.compass_location AS compass_location, rest.title_picture AS title_picture, rest.description_picture AS description_picture FROM reviews.restaurant rest WHERE compass_location = 'South'";
    db.query(sql, callback);
  }
  getEastRestaurant(callback) {
    var sql =
      "SELECT rest.id AS id, rest.name AS name, rest.location AS location, rest.map AS map, rest.telephone_number AS telephone_number, rest.opening_hours AS opening_hours, rest.description AS description, rest.rating AS rating, rest.cuisine AS cuisine, rest.compass_location AS compass_location, rest.title_picture AS title_picture, rest.description_picture AS description_picture FROM reviews.restaurant rest WHERE compass_location = 'East'";
    db.query(sql, callback);
  }
  getWestRestaurant(callback) {
    var sql =
      "SELECT rest.id AS id, rest.name AS name, rest.location AS location, rest.map AS map, rest.telephone_number AS telephone_number, rest.opening_hours AS opening_hours, rest.description AS description, rest.rating AS rating, rest.cuisine AS cuisine, rest.compass_location AS compass_location, rest.title_picture AS title_picture, rest.description_picture AS description_picture FROM reviews.restaurant rest WHERE compass_location = 'West'";
    db.query(sql, callback);
  }
  search(restaurantName, callback) {
    var sql =
      "SELECT rest.name,rest.description,rest.rating,rest.compass_location FROM reviews.restaurant rest WHERE rest.name = ?";
    db.query(sql, [restaurantName], callback);
  }
}

module.exports = RestaurantDB;
