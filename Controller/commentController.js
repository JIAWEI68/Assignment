"use strict";
const commentsDB = require('../models/commentsDB');
const comments = require('../models/comments');
const { TIMESTAMP } = require('mysql/lib/protocol/constants/types');

var CommentsDB = new commentsDB();


function getAllComments(request, respond){
    CommentsDB.getAllComments((function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    }));
}

function addComment(request,respond){
    var now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var comment = new comments(null,request.body.restaurantId, request.body.userId, request.body.name,
        request.body.description, request.body.rating, request.body.profilePicture,now.toString());
    CommentsDB.addComment(comment, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
    }

function updateComment(request,respond){
    var now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var Comment = new comments(parseInt(request.params.id),null,null,request.body.name,request.body.description,request.body.rating,
        request.body.profilePicture,now.toString());
    CommentsDB.updateComment(Comment, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    }); 
}

function deleteComment(request,respond){
    var commentId = request.params.id;
    CommentsDB.deleteComment(commentId, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    }); 
}

module.exports = {getAllComments,addComment,updateComment,deleteComment};