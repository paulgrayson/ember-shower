
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', {})
};

exports.posts = function(req, res){
  // Demo posts
  POSTS = [
    {
      id: 0,
      url: "this-is-post-1",
      name: "Post 1",
      body: "This is the body of post 1. This is not a summary",
      visible: true,
      created_at: new Date()
    },
    {
      id: 1,
      url: "and-post-2",
      name: "Welcome to Post 2",
      body: "Post 2 is much more interesting than post 1",
      visible: true,
      created_at: new Date()
    }
  ];
  res.json({posts: POSTS}); 
};

