"use strict";
const userDB = require("../models/userDB");
const users = require("../models/users");
const bcrypt = require("bcryptjs");
var UserDB = new userDB();
var jwt = require('jsonwebtoken');
var secret = "somesecretkey";

function getAllUsers(request, respond) {
  UserDB.getAllUsers(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function signUp(request, respond) {
  var user = new users(
    null,
    request.body.username,
    bcrypt.hashSync(request.body.password,10),
    request.body.address,
    request.body.firstName,
    request.body.lastName,
    request.body.gender,
    request.body.email,
    request.body.phoneNumber
  );
  UserDB.signUp(user, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function login(request, respond) {
  var username = request.body.username;
  var password = request.body.password;
  UserDB.login(username, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      if (result.length > 0) {
        const hash = result[0].password;
        var flag = bcrypt.compareSync(password, hash);
        if (flag) {
          var token = jwt.sign(username,secret)
          respond.json({result: token});
        } else {
          respond.json({ result: "incorrect password"});
        }
      } else {
        respond.json({ result: "incorrect username or password"});
      }
    }
  });
}

function updateUser(request, respond) {
    var token = request.body.token;
    var username = request.body.username;
    //var password = bcrypt.hashSync(request.body.password);
    var address = request.body.address;
    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    var gender = request.body.gender;
    var email = request.body.email;
    var phoneNumber = request.body.phoneNumber;
    var profilePicture = request.body.profilePicture;
    try{
    var decoded = jwt.verify(token,secret); 
    UserDB.updateUser(username,address,firstName,lastName,gender,email,phoneNumber,profilePicture,decoded,function(error, result){
      if (error) {
      respond.json(error);
      } 
      else {
      respond.json(result);
      }
      });}
      catch(error){
        respond.json({result : "Invalid token"})
      }
}

function deleteUser(request, respond) {
  var token = request.body.token;
  UserDB.deleteUser(token, function (error, result){
      if (error) {
      respond.json(error);
      } 
      else {
      respond.json(result);
      }
   
  });
}

function getUser(request, respond) {
  var userID = request.params.id;
  UserDB.getUser(userID, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result); 
    }
  });
}

function getUserToken(request, respond){
  var token = request.body.token;
  try{
    var decoded = jwt.verify(token,secret);
    UserDB.getUserToken(decoded, function (error, result) {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }
  catch(err){
    respond.json({result:"invalid token"})
  }

 
}
module.exports = {
  getAllUsers,
  signUp,
  login,
  updateUser,
  deleteUser,
  getUser,
  getUserToken
};


