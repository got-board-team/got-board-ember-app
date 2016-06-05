import Ember from 'ember';

const { computed }  = Ember;

export default Ember.Component.extend({
  attributeBindings: ["match"],

  session: Ember.inject.service(),

  init() {
    this._super(...arguments);
    let match = this.get("match");
    let store = match.store;
    store.createRecord("garrison", { id: 2, name: "pyke", match: match } );
  },

  didInsertElement() {
    console.log("Recovering scroll position");
    window.scrollTo(130, 460);
  },

  board: computed(function () {
    return this.get("match.board");
  }),

  currentPlayer: computed("match.players.@each.userId", function () {
    let players = this.get("match.players");
    let userId = this.get("session.userId");
    let player = players.filterBy("userId", userId).toArray()[0];
    return player;
  }),

  isPlayer: computed("currentPlayer", function() {
    return this.get("currentPlayer") != null;
  }),
});
