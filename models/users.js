"use strict";

const { TIS620_BIN } = require("mysql/lib/protocol/constants/charsets");

class users {
  constructor(
    id,
    username,
    password,
    address,
    first_name,
    last_name,
    gender,
    email,
    phone_number,
    profile_picture
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.address = address;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.email = email;
    this.phone_number = phone_number;
    this.profile_picture = profile_picture;
  }
  getId() {
    return this.id;
  }
  getUsername() {
    return this.username;
  }
  getPassword() {
    return this.password;
  }
  getAddress() {
    return this.address;
  }
  getFirstName() {
    return this.first_name;
  }
  getLastName() {
    return this.last_name;
  }
  getGender() {
    return this.gender;
  }
  getEmail() {
    return this.email;
  }
  getPhoneNumber() {
    return this.phone_number;
  }
  getProfilePicture() {
    return this.profile_picture;
  }
  setId(id) {
    id = this.id;
  }
  setUsername(username) {
    username = this.username;
  }
  setPassword(password) {
    password = this.password;
  }
  setAddress(address) {
    address = this.address;
  }
  setFirstName(firstName) {
    firstName = this.first_name;
  }
  setLastName(lastName) {
    lastName = this.last_name;
  }
  setGender(gender) {
    gender = this.gender;
  }
  setEmail(email) {
    email = this.email;
  }
  setPhoneNumber(phoneNumber) {
    phoneNumber = this.phone_number;
  }
  setProfilePicture(profilePicture) {
    profilePicture = this.profile_picture;
  }
}

module.exports = users;
