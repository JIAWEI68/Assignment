"use strict";

var db = require('../db-connections');
const users = require('./users');
class userDB{
    getAllUsers(callback){
        var sql = "SELECT * from reviews.user"
        db.query(sql,callback);
    }
    signUp(users, callback){
        var sql = "INSERT INTO user(username,password,address,first_name,last_name,gender,email,phone_number,profile_picture) VALUES (?,?,?,?,?,?,?,?,?)"
        db.query(sql,[users.getUsername(),users.getPassword(),users.getAddress(),users.getFirstName(),users.getLastName(),
            users.getGender(),users.getEmail(),users.getPhoneNumber(),users.getProfilePicture()], callback);
    }
    login(callback){
        var sql = "SELECT username, password from reviews.user"
        db.query(sql,callback)
    }
    updateUser(users,callback){
        var sql = "UPDATE reviews.user SET username = ?, password = ?, address = ?, first_name = ?, last_name = ?, gender = ?, email = ?, phone_number = ?, profile_picture = ? WHERE id = ?";
        return db.query(sql,[users.getUsername(),users.getPassword(),users.getAddress(),users.getFirstName(),users.getLastName(),
            users.getGender(),users.getEmail(),users.getPhoneNumber(),users.getProfilePicture(),users.getId()], callback);
    }
    deleteUser(UserId, callback){
        var sql = "DELETE from user WHERE id = ?"
        return db.query(sql,[UserId], callback)
    }
    getUser(UserId,callback){
        var sql = "SELECT * from reviews.user WHERE id = ?"
        return db.query(sql,[UserId],callback);
    }
}

module.exports = userDB;