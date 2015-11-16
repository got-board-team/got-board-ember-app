import Ember from 'ember';

export default Ember.Controller.extend({
  currentPlayer: function() {
    var players = this.get("model.players");
    var house = window.location.search.split("=")[1] || "Greyjoy";
    var p = players.filterBy("house", house).toArray()[0];
    return p;
  }.property(),
});
