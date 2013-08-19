var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;

Posts = function(host, port, callback) {
  this.db= new Db('ember-shower', new Server(host, port, {safe: false}, {auto_reconnect: true}, {}));
  this.db.open(callback || function(){});
};

Posts.prototype.collection = function(callback) {
  this.db.collection('posts', function(error, postsCollection) {
    if(error) callback(error);
    else callback(null, postsCollection);
  });
};

Posts.prototype.all = function(callback) {
  this.collection(function(err, posts) {
    if(err) throw err;
    posts.find().toArray(callback);
  });
};

Posts.prototype.add = function(newPosts, callback) {
  this.collection(function(err, postsCollection) {
    if(err)
      callback(err, null);
    else {
      postsCollection.insert(newPosts, callback);
    }
  });
}

exports.Posts = Posts;

