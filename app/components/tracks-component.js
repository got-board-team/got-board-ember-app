import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateMatch() {
      this.get('match').save();
    },
  }
});
