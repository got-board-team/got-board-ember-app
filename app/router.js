import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('matches', function() {
    this.route('show', { path: "/:id" });
    this.route('new');
  });
  this.route('login');
});
