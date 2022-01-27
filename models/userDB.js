"use strict";

var db = require("../db-connections");
const users = require("./users");
class userDB {
  getAllUsers(callback) {
    var sql = "SELECT * from reviews.user";
    db.query(sql, callback);
  }
  signUp(users, callback) {
    var sql =
      "INSERT INTO user(username,password,address,first_name,last_name,gender,email,phone_number) VALUES (?,?,?,?,?,?,?,?)";
    db.query(
      sql,
      [
        users.getUsername(),
        users.getPassword(),
        users.getAddress(),
        users.getFirstName(),
        users.getLastName(),
        users.getGender(),
        users.getEmail(),
        users.getPhoneNumber()
      ],
      callback
    );
  }
  login(username, callback) {
    var sql = "SELECT username, password from reviews.user WHERE username = ?";
    db.query(sql, [username], callback);
  }
  updateUser(username,address,firstName,lastName,gender,email,phoneNumber,profilePicture,id,callback) {
    var sql =
      "UPDATE reviews.user SET username = ?, address = ?, first_name = ?, last_name = ?, gender = ?, email = ?, phone_number = ?, profile_picture = ? WHERE username = ?";
    return db.query(
      sql,
      [ username,
        address,
        firstName,
        lastName,
        gender,
        email,
        phoneNumber,
        profilePicture,
        username
      ],
      callback
    );
  }
  deleteUser(username, callback) {
    var sql = "DELETE from user WHERE username = ?";
    return db.query(sql, [username], callback);
  }
  getUser(UserId, callback) {
    var sql = "SELECT * from reviews.user WHERE id = ?";
    return db.query(sql, [UserId], callback);
  }
  getUserToken(username,callback){
    var sql = "SELECT distinct * from reviews.user WHERE username = ?"
    db.query(sql,[username],callback)
  }
}

module.exports = userDB;
