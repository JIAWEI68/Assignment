"use strict";
const RestaurantDB = require("../models/RestaurantDB");
const restaurant = require("../models/restaurant");
const sgMail = require("@sendgrid/mail");

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

function sendEmail(request, respond) {
  var email = request.body.email;
  var content = request.body.content;
  sgMail.setApiKey("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");
  const msg = {
    to: email, // Change to your recipient
    from: "ang.jiawei56@gmail.com", // Change to your verified sender
    subject: "foodie review",
    text: content,
    html: '<strong>'+ content + '</strong>',
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      respond.json({result:"success"})
    })
    .catch((error) => {
      console.error(error);
      respond.json({result:"fail"})
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
  sendEmail
};
