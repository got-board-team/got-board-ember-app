import Ember from 'ember';
import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({
  setUser: function (user) {
    this.set("userId", user);
  },
});
