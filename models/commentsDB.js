"use strict";

var db = require("../db-connections");
class commentsDB {
  getAllComments(callback) {
    var sql = "SELECT*from reviews.comment";
    db.query(sql, callback);
  }
  addComment(comments, callback) {
    var sql =
      "INSERT INTO comment(restaurant_id,user_id,name,description,rating,profile_picture,time_stamp) VALUES (?,?,?,?,?,?,?)";
    db.query(
      sql,
      [
        comments.getRestaurantId(),
        comments.getUserId(),
        comments.getName(),
        comments.getDescription(),
        comments.getRating(),
        comments.getProfilePicture(),
        comments.getTimeStamp(),
      ],
      callback
    );
  }
  updateComment(comment, callback) {
    var sql =
      "UPDATE comment SET name = ?, description = ?, rating = ?, profile_picture = ?, time_stamp = ? WHERE id = ?";
    return db.query(
      sql,
      [
        comment.getName(),
        comment.getDescription(),
        comment.getRating(),
        comment.getProfilePicture(),
        comment.getTimeStamp(),
        comment.getId(),
      ],
      callback
    );
  }
  deleteComment(commentId, callback) {
    var sql = "DELETE from comment WHERE id = ?";
    return db.query(sql, [commentId], callback);
  }
}

module.exports = commentsDB;
