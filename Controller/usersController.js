"use strict";
const userDB = require("../models/userDB");
const users = require("../models/users");

var UserDB = new userDB();

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
    request.body.password,
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
  UserDB.login(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function updateUser(request, respond) {
  var now = new Date();
  var user = new users(
    parseInt(request.params.id),
    request.body.username,
    request.body.password,
    request.body.address,
    request.body.firstName,
    request.body.lastName,
    request.body.gender,
    request.body.email,
    request.body.phoneNumber,
    request.body.profilePicture,
    now.toString()
  );
  UserDB.updateUser(user, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
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
module.exports = {
  getAllUsers,
  signUp,
  login,
  updateUser,
  deleteUser,
  getUser,
};
