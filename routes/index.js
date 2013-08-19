var Posts = require('../posts').Posts;

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', {})
};


var postsHelper = new Posts('localhost', 27017);

// Demo posts
POSTS = [
  {
    url: "this-is-post-1",
    name: "Post 1",
    body: "This is the body of post 1. This is not a summary",
    visible: true,
    created_at: new Date()
  },
  {
    url: "and-post-2",
    name: "Welcome to Post 2",
    body: "Post 2 is much more interesting than post 1",
    visible: true,
    created_at: new Date()
  }
];

exports.posts = function(req, res){
  postsHelper.all(function(err, docs) {
    if(err) throw err;
    if(docs.length == 0) {
      postsHelper.add(POSTS, function(err, docs){
        if(err) throw err;
        res.json({posts: docs});
      });
    }
    else {
      res.json({posts: docs});
    }
  });
};

