// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', this.dequeue, this);

  },

  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function(song) {
    //if this song is at 0
    //then play the next song ()


    //else
    this.remove(song)
  }



});