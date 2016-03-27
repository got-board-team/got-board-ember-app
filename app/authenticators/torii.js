import Ember from 'ember';
import Torii from 'ember-simple-auth/authenticators/torii';
import ENV from '../config/environment';

const { service } = Ember.inject;

export default Torii.extend({
  torii: service("torii"),
  session: service("session"),

  authenticate(options) {
    return this._super(options).then((data) => {
      this.fetchUser(data);
    });
  },

  restore(data) {
    var resolveData = data || {};
    this.provider = resolveData.provider;
    this.get("session").setUser(data.user_id);
    return new Ember.RSVP.Promise(function(resolve) { resolve(resolveData); });
  },

  invalidate(data) {
    var resolveData = data || {};
    this.provider = resolveData.provider;
    return new Ember.RSVP.Promise(function(resolve) { resolve(resolveData); });
  },

  fetchUser(data) {
    let tokenEndpoint = ENV["ember-simple-auth"].serverTokenEndpoint;
    this.makeRequest(tokenEndpoint, data).then((response) => {
      this.trigger("sessionDataUpdated", response);
      this.get("session").setUser(response.user_id);
    });
  },

  makeRequest: function (endpoint, data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax(endpoint, {
        method: 'POST',
        data: data,
        success: (response) => { resolve(response); },
        error: (reason) => { reject(reason); },
      });
    });
  },
});
