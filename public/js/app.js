App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.Store = DS.Store.extend({});

var attr = DS.attr;

App.Post = DS.Model.extend({
  name: attr('string'),
  body: attr('string'),
  url: attr('string'),
  visible: attr('boolean'),
  created_at: attr('date') 
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    var posts = App.Post.find();
    return {posts: posts};
  }
});

Ember.Handlebars.helper('summary', function(text) {
  words = text.split(" ");
  return words.length >= 60 ? _.first(words,60).join(' ') + "..." : text;
});
