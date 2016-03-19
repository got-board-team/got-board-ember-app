import Ember from 'ember';
import Torii from 'ember-simple-auth/authenticators/torii';

const { service } = Ember.inject;

export default Torii.extend({
  torii: service('torii'),

  authenticate(options) {
    var request = new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax('http://localhost:3000/countries', {
        success: function(response) {
          resolve(response);
        },
        error: function(reason) {
          reject(reason);
        }
      });
    });

    return this._super(options).then(function (data) {
      console.log(data);
      console.log(`authorizationCode:\n${data.authorizationCode}\nprovider: ${data.provider}\nredirectUri: ${data.redirectUri}`);

      request.then(function(response) {
        // e.g render template from response
        console.log('then response: ' + response);
      }, function(error) {
        // handle error (show error message, retry, etc.)
        console.log('then error response: ');
        console.log(error);
      });
    });
  }
});
