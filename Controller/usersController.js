"use strict";
const userDB = require("../models/userDB");
const users = require("../models/users");
var bcrypt = require("bcryptjs");
var UserDB = new userDB();
var jwt = require('jsonwebtoken')
var secret = "somesecretkeysd"

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
    bcrypt.hashSync(request.body.password),
    request.body.address,
    request.body.firstName,
    request.body.lastName,
    request.body.gender,
    request.body.email,
    request.body.phoneNumber,
    request.body.profilePicture
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
          respond.json({ result: token});
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
    var user = new users(
    parseInt(request.params.id),
    request.body.username,
    bcrypt.hashSync(request.body.password),
    request.body.address,
    request.body.firstName,
    request.body.lastName,
    request.body.gender,
    request.body.email,
    request.body.phoneNumber,
    request.body.profilePicture
  );
    var token = request.body.token; 
  try{
    var decoded = jwt.verify(token,secret);
    UserDB.updateUser(user, function (error, result) {
      
      if (error) {
      respond.json(error);
    } else {
      respond.json(result);}
  });
  }
  catch(error){
    respond.json({result:"invalid token"})
  }
  
}

function deleteUser(request, respond) {
  var userId = request.params.id;
  UserDB.deleteUser(userId, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
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

function getUserPic(request, respond){
  var token = request.body.token;
  try{
    var decoded = jwt.verify(token,secret)
  }
  catch(err){

  }

 
}
module.exports = {
  getAllUsers,
  signUp,
  login,
  updateUser,
  deleteUser,
  getUser,
};


