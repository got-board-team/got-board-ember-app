import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      this.get('session').authenticate('authenticator:torii', 'google-oauth2').then((data) => {
        console.log(data);
        //console.log(`Authenticated via ${data.provider}`);
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      });
    }
  }
});
