"use strict";

class comments {
  constructor(
    id,
    restaurant_id,
    user_id,
    name,
    description,
    rating,
    profile_picture,
    restaurant_name,
    time_stamp
  ) {
    this.id = id;
    this.restaurant_id = restaurant_id;
    this.user_id = user_id;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.profile_picutre = profile_picture;
    this.restaurant_name = restaurant_name;
    this.time_stamp = time_stamp;
  }
  getId() {
    return this.id;
  }
  getRestaurantId() {
    return this.restaurant_id;
  }
  getUserId() {
    return this.user_id;
  }
  getName() {
    return this.name;
  }
  getDescription() {
    return this.description;
  }
  getRating() {
    return this.rating;
  }
  getProfilePicture() {
    return this.profile_picture;
  }
  getRestaurantName(){
    return this.restaurant_name;
  }
  getTimeStamp() {
    return this.time_stamp;
  }
  setRestaurantId(restaurantId) {
    this.restaurant_id = restaurantId;
  }
  setUserId(userId) {
    this.user_id = userId;
  }
  setName(name) {
    this.name = name;
  }
  setDescription(description) {
    this.description = description;
  }
  setRating(rating) {
    this.rating = rating;
  }
  setProfilePicture(profilePicture) {
    this.profile_picture = profilePicture;
  }
  setRestaurantName(restaurant_name){
    this.restaurant_name = restaurant_name;
  }
  setTimeStamp(timeStamp) {
    this.time_stamp = timeStamp;
  }
}

module.exports = comments;
