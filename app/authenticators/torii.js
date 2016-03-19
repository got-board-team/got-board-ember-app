import Ember from 'ember';
import Torii from 'ember-simple-auth/authenticators/torii';
import ENV from '../config/environment';

const { service } = Ember.inject;

export default Torii.extend({
  torii: service('torii'),
  session: Ember.inject.service('session'),

  authenticate(options) {
    return this._super(options).then((data) => {
      console.log(`authorizationCode:\n${data.authorizationCode}\nprovider: ${data.provider}\nredirectUri: ${data.redirectUri}`);
      this.makeRequest(data);
    });
  },

  makeRequest: function (data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax(ENV['ember-simple-auth'].serverTokenEndpoint, {
        method: 'POST',
        data: data,
        success: (response) => {
          resolve(response);
        },
        error: (reason) => {
          reject(reason);
        }
      });
    });
  },
});
