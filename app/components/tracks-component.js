import Ember from 'ember';

export default Ember.Component.extend({
  updateRound: function(increase) {
    let match = this.get('match');
    let round = match.get('round');
    increase ? ++round : --round
    match.set('round', round);
    match.save();
  },

  actions: {
    increaseRound: function() {
      this.updateRound(true);
    },

    decreaseRound: function() {
      this.updateRound(false);
    },
  }
});
