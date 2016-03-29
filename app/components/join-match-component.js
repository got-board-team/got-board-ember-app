import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "article",
  //TODO fix style
  classNames: ["player-dock"],

  session: Ember.inject.service(),

  playersSlots: Ember.computed("match.players@each.userId", function() {
    return this.get("match.players").filterBy("userId", null).toArray();
  }),

  actions: {
    chooseHouse(player) {
      let userId = this.get("session.userId");
      player.set("userId", userId);
      player.save();
    }
  }
});
