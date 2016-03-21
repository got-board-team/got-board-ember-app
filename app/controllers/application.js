import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    invalidateSession() {
      console.log("invalidateSession");
      this.get('session').invalidate();
    }
  }
});
