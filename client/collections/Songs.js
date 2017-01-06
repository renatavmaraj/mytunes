// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/songs/',

  parse: function(data) {
  ///console.log('data is', data.results);
    return data.results;
  },

  initialize: function() {
    this.fetch();
    console.log('this.fetch is', this.fetch());
  },

  model: SongModel,

});