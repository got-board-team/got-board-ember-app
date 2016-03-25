import Ember from 'ember';

const { computed }  = Ember;

export default Ember.Component.extend({
  attributeBindings: ["match"],

  board: computed(function () {
    return this.get("match.board");
  }),

  currentPlayer: computed(function () {
    var players = this.get("match.players");
    var house = window.location.search.split("=")[1] || "Greyjoy";
    var player = players.filterBy("house", house).toArray()[0];
    return player;
  }),

});
