"use strict";
const RestaurantDB = require("../models/RestaurantDB");
const restaurant = require("../models/restaurant");

var restaurantDB = new RestaurantDB();

function getAllRestaurant(request, respond) {
  restaurantDB.getAllRestaurant(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getRestaurantCuisine(request, respond) {
  restaurantDB.getRestaurantCuisine(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getNorthRestaurant(request, respond) {
  restaurantDB.getNorthRestaurant(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getSouthRestaurant(request, respond) {
  restaurantDB.getSouthRestaurant(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getEastRestaurant(request, respond) {
  restaurantDB.getEastRestaurant(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getWestRestaurant(request, respond) {
  restaurantDB.getWestRestaurant(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getJapRestaurant(request, respond) {
  restaurantDB.getJapRestaurant(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getChineseRestaurant(request, respond) {
  restaurantDB.getChineseRestaurant(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getWesternRestaurant(request, respond) {
  restaurantDB.getWesternRestaurant(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getIndianRestaurant(request, respond) {
  restaurantDB.getIndianRestaurant(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getMalayRestaurant(request, respond) {
  restaurantDB.getMalayRestaurant(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function search(request, respond) {
  var restaurantName = request.body.name;
  restaurantDB.search(restaurantName, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}
module.exports = {
  getAllRestaurant,
  getRestaurantCuisine,
  getNorthRestaurant,
  getSouthRestaurant,
  getEastRestaurant,
  getWestRestaurant,
  getJapRestaurant,
  getMalayRestaurant,
  getChineseRestaurant,
  getIndianRestaurant,
  getWesternRestaurant,
  search,
};
