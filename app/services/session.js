import Ember from 'ember';
import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({

  store: Ember.inject.service(),

  setCurrentUser: function() {
    if (this.get('isAuthenticated')) {
      console.log("Setting current user...");
      this.set('currentUser', 'greyjoy');
      //this.get('store').queryRecord('user', {}).then((user) => {
        //this.set('currentUser', user);
      //});
    }
  }.observes('isAuthenticated')

});
