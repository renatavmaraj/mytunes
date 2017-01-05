// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function() {
    console.log('this.fetch is', this.fetch());
  },

  parse: function(data) {
    console.log('data is', data.results);
    return data.results;
  }

});