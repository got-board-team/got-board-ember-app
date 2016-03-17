import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      //const { login, password } = this.getProperties('login', 'password');
      this.get('session').authenticate('authenticator:torii', 'google-oauth2').then(() => {
        alert('Success! Click the top link!');
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      });
    },
    invalidate() {
      this.get('session').invalidate();
    }
  }
});
