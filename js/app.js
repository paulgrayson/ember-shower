App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    // Demo posts
    return {
      blog: { name: 'Bananas are the only fruit' },
      posts: [
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
      ]
    }
  }
});
