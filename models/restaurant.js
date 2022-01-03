"use strict";

class restaurant {
  constructor(
    id,
    name,
    location,
    map,
    telephone_number,
    opening_hours,
    description,
    rating,
    cuisine,
    compass_location,
    title_picture,
    description_picture
  ) {
    this.id = id;
    this.name = name;
    this.location - location;
    this.map = map;
    this.telephone_number = telephone_number;
    this.opening_hours = opening_hours;
    this.description = description;
    this.rating = rating;
    this.cuisine = cuisine;
    this.compass_location = compass_location;
    this.title_picture = title_picture;
    this.description_picture = description_picture;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getLocation() {
    return this.location;
  }
  getMap() {
    return this.map;
  }
  getTelephoneNumber() {
    return this.telephone_number;
  }
  getOpeningHours() {
    return this.opening_hours;
  }
  getDescription() {
    return this.description;
  }
  getRating() {
    return this.rating;
  }
  getCuisine() {
    return this.cuisine;
  }
  getCompassLocation() {
    return this.compass_location;
  }
  getTitlePicture() {
    return this.title_picture;
  }
  getDescriptionPicture() {
    return this.description_picture;
  }
  setName(name) {
    this.name = name;
  }
  setLocation(location) {
    this.location = location;
  }
  setMap(map) {
    this.map = map;
  }
  setTelephoneNumber(telephoneNumber) {
    this.telephone_number = telephoneNumber;
  }
  setOpeningHours(openingHours) {
    this.opening_hours = openingHours;
  }
  setDescription(description) {
    this.description = description;
  }
  setRating(rating) {
    this.rating = rating;
  }
  setCuisine(cuisine) {
    this.cuisine = cuisine;
  }
  setCompassLocation(compassLocation) {
    this.compass_location = compassLocation;
  }
  setTitlePicture(titlePicture) {
    this.title_picture = titlePicture;
  }
  setDescriptionPicture(descriptionPicture) {
    this.description_picture = descriptionPicture;
  }
}

module.exports = restaurant;
